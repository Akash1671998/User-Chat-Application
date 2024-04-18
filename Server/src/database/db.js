
const mongoose = require('mongoose');


const Connection = () => {
    const DB_URI="mongodb://localhost:27017/chat";
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

module.exports ={Connection};