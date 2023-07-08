const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    completeName: {
        type: String,
        required: false,
        unique: false
    },
    dateBirth: {
        type: Date,
        required: false,
        unique: false
    },
    phoneContact: {
        type: String,
        required: false,
        unique: false
    }
}, {timestamp: true})

const User = mongoose.model('User', UserSchema)

module.exports = User