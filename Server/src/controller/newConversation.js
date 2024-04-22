const {ChatConversation}= require('../model/conversation');


console.log("OOOOOOOOOOOOOOOOOOO",ChatConversation)

const getConversationMessage = async (request, response) => {
  try {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    console.log("senderIDDDDDDDDDDDDDDD",senderId);
    console.log("receiverrrrrrrrrrrrrrrrrrrr",receiverId)

    if (!senderId || !receiverId) {
      return response.status(400).json({
        status: "Fail",
        message: "Sender ID and receiver ID are required.",
      });
    }

    const exist = await ChatConversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
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

module.exports = { getConversationMessage };
