
const { Message } = require('../model/message');
const { ChatConversation } = require("../model/conversation")

const UserNewMessage = async (request, response) => {
    try {
        const newMessageData = new Message({
            conversationId: request.body.conversationId,
            senderId: request.body.senderId,
            receiverId: request.body.receiverId,
            textmessage: request.body.textmessage,
            type: request.body.type
        });

        let ConversationMessage = await ChatConversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.textmessage })
        let data = await newMessageData.save();
        response.status(200).json({
            status: "Ok",
            message: "Message Sent Successfully",
            data: data,
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            status: "Fail",
            message: "Failed To Save Message",
            messageDetails: error.message,
        });
    }
}


const getUserMessage = async (request, response) => {
    try {
        let Id = request.params._id;
        const data = Message.findById({ ConversationId: Id });
        response.status(200).json({
            status: "Ok",
            message: "data getting successfully",
            messageDetails: "",
            data: data,
        });

    } catch (error) {
        console.log("getConversationMessage", error);
        response.status(500).json({
            status: "ok",
            message: "Faild to get data",
            messageDetails: "",
        });
    }
};

module.exports = { UserNewMessage,getUserMessage };
