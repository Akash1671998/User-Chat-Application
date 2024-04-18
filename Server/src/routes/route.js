const express = require('express');
const userController = require('../controller/userController');

const route = express.Router();

route.post('/add', userController.addUser);

module.exports = route;



