const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ImageSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    postImg: {
        type: String
    }
})

module.exports = Image = mongoose.model('image', ImageSchema)