const mongoose = require('mongoose')
const {userSchema} = require('../models/User.js')

const connectDB = async () =>{
    const conn = mongoose.connect(process.env.MONGO_URI)
    console.log('Database Connected')
}

const user = mongoose.model('user', userSchema);
module.exports = { connectDB, user }