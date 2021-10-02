const mongoose = require('mongoose');

const commentModel = new mongoose.Schema({
    text :{
        type: String, 
    },
    posted_by  :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    todo_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "todos"
    }
})

module.exports = mongoose.model('Comment', commentModel);