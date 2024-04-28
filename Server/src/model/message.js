const  mongoose = require('mongoose');

// Front End Sending All Data Base Model
const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    textmessage: {
        type: String
    },
    type: {
        type: String
    }
},
{ 
        timestamps: true
})

const Message = mongoose.model('Message', messageSchema);

module.exports={Message}