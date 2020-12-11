const { Schema, model } = require('mongoose');

// aqui creamos el Schema
const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamp: true
})

module.exports = model('Note', noteSchema);