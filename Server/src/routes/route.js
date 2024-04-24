const express = require('express');
const userController = require('../controller/userController');
const { ConversationMessage,getConversationMessage } = require('../controller/newConversation'); 

const route = express.Router();

route.post('/add', userController.addUser);
route.get('/chatusers', userController.getChatUsers);


route.post('/conversation/add', ConversationMessage);
route.get('/conversation/get', getConversationMessage);

module.exports = route;



