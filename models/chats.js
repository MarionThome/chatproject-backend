const mongoose = require('mongoose')

const chatShema = mongoose.Schema({
    author : String, 
    message : String, 
    date : Date,
})

const Chat = mongoose.model("chats", chatShema)
module.exports = Chat