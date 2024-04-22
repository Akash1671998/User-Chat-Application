const mongoose = require('mongoose');

const ChatConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

const ChatConversation = mongoose.model('Conversation', ChatConversationSchema);

module.exports = {ChatConversation}
