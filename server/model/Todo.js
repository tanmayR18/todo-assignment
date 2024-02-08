const mongoose = require("mongoose")

const todo = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Todo', todo)