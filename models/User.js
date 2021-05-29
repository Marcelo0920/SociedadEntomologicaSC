const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gravatar: {
        type: String
    },
    date: {
        type: Date,
        Date: Date.now
    },
    career: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema);