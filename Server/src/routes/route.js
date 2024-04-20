const express = require('express');
const userController = require('../controller/userController');

const route = express.Router();

route.post('/add', userController.addUser);
route.get('/chatusers', userController.getChatUsers);

module.exports = route;



