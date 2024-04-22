const express = require('express');
const userController = require('../controller/userController');
const { getConversationMessage } = require('../controller/newConversation'); 

const route = express.Router();

route.post('/add', userController.addUser);
route.get('/chatusers', userController.getChatUsers);


route.post('/conversation/add', getConversationMessage);

module.exports = route;



