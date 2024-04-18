const  express = require('express');
const Router = require('./src/routes/route');
const cars = require('cors');
const bodyParser = require('body-parser');
const connnection = require('./src/database/db')
const port = 8080;


const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cars());
app.use('/',Router);


app.listen(port, () => console.log(`this application listening on port ${port}!`))