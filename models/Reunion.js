const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReunionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Reunion = mongoose.model('reunion', ReunionSchema)