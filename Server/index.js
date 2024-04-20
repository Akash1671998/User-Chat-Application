const express = require('express');
const Router = require('./src/routes/route');
const bodyParser = require('body-parser');
const Connection = require('../Server/src/database/db');
const cors = require('cors');
const port = 8080;


const app = express();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);


app.listen(port, () => console.log(`This application is listening on port ${port}!`));
