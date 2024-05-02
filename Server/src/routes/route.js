const express = require('express');
const userController = require('../controller/userController');
const { ConversationMessage,getConversationMessage } = require('../controller/newConversation'); 
const {UserNewMessage,getUserMessage} = require('../controller/messageController');
const {fileUpload}=require('../controller/fileController');
const uploads= require('../Middleware/upload');
const {getFile}=require('../controller/fileController');

const route = express.Router();

route.post('/add', userController.addUser);
route.get('/chatusers', userController.getChatUsers);

route.post('/conversation/add', ConversationMessage);
route.post('/conversation/get', getConversationMessage);

route.post('/message/add', UserNewMessage);
route.get('/message/get/:id', getUserMessage);

route.post('/file/upload', uploads.single('file'), fileUpload);
route.get('/file/:filename',getFile);



module.exports = route;



