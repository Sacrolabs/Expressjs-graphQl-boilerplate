const mongoose = require('mongoose')
const Post = require('./Post')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please enter a vaild email"
        ]
    },
    createdEvents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
},
    { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)