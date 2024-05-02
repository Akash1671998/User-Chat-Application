const { Message } = require("../model/message");
const { ChatConversation } = require("../model/conversation");

const UserNewMessage = async (request, response) => {
  try {
    const newMessageData = new Message({
      conversationId: request.body.conversationId,
      senderId: request.body.senderId,
      receiverId: request.body.receiverId,
      type: request.body.type,
      textmessage: request.body.textmessage,
    });

    let ConversationMessage = await ChatConversation.findByIdAndUpdate(
      request.body.conversationId,
      { message: request.body.textmessage }
    );
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
};

const getUserMessage = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    if (messages.length === 0) {
      return response.status(200).json({ 
        status: "Ok",
        message: "No messages found for This User",
        messageDetails: "",
        data: [],
      });
    }

    response.status(200).json({
      status: "Ok",
      message: "Data retrieved successfully",
      messageDetails: "",
      data: messages,
    });
  } catch (error) {
    console.log("getUserMessage", error);
    response.status(500).json({
      status: "Internal Server Error",
      message: "Failed to get data",
      messageDetails: "",
    });
  }
};

module.exports = { UserNewMessage, getUserMessage };
