const mongoose = require('mongoose')
const User = require('./User')

const postSchema = new mongoose.Schema({
    event: {
        type: String,
        require: true
    },
    creator: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('post', postSchema)