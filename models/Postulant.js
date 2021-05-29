const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostulantSchema = new Schema({
    text: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true
    },
    career: {
        tyep: String
    }
})

module.exports = Postulant = mongoose.model('postulant', PostulantSchema);