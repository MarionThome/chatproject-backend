const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user : String, 
    date : Date
})

const User = mongoose.model("users", userSchema)
module.exports = User