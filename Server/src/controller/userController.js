const { User } = require("../model/user");

console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUU",User)

const addUser = async (request, response) => {
  try {
    let existingUser = await User.findOne({ sub: request.body.sub });

    if (existingUser) { 
      response.status(409).json({
        status: "Fail",
        message: "Chat User Already Exists",
        messageDetails: "User already exists with the given sub",
      });
      return; 
    }

    const newUser = new User(request.body);
    const savedUser = await newUser.save();
    response.status(200).json({
      status: "Ok",
      message: "Chat User Created Successfully",
      messageDetails: "New Chat User Created Successfully",
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      status: "Fail",
      message: "Failed To Create New Chat User",
      messageDetails: error.message,
    });
  }
};

const getChatUsers = async (request, response) => {
    try {
      const users = await User.find({});
      return response.status(200).json({
        status: "Ok",
        message: "Chat Users Fetched Successfully",
        data: users,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        status: "Fail",
        message: "Failed To Fetch Chat Users",
        messageDetails: error.message,
      });
    }
  };

  const getConversationMessage = async (request, response) => {
    try {
      const users = await User.find({});
      return response.status(200).json({
        status: "Ok",
        message: "Chat Users Fetched Successfully",
        data: users,
      });
    } catch (error) {
      console.error(error);
      return response.status(500).json({
        status: "Fail",
        message: "Failed To Fetch Chat Users",
        messageDetails: error.message,
      });
    }
  };
  

module.exports = { addUser,getChatUsers };
