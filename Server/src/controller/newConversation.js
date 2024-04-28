const { ChatConversation } = require("../model/conversation");

const ConversationMessage = async (request, response) => {
  try {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
    if (!senderId || !receiverId) {
      return response.status(400).json({
        status: "Fail",
        message: "Sender ID and receiver ID are required.",
      });
    }

    const exist = await ChatConversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      response.status(200).json("conversation already exists");
      return;
    }

    const newConversation = new ChatConversation({
      members: [receiverId, senderId],
    });

    await newConversation.save();
    return response.status(200).json({
      status: "ok",
      message: "Conversation Saved Successfully",
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      status: "Fail",
      message: "Failed To Save Conversation",
      messageDetails: error.message,
    });
  }
};

const getConversationMessage = async (request, response) => {
  try {
    const { senderId, receiverId } = request.body;
    const exist = await ChatConversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    response.status(200).json({
      status: "Ok",
      message: "data getting successfully",
      messageDetails: "",
      data: exist,
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

module.exports = { ConversationMessage, getConversationMessage };
