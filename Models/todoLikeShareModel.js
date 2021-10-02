const mongoose = require('mongoose');

const todoLikeShareModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    todo_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todos"
    },
    views :{
        type: Number, 
        default: 0
    },
    like :{
        type: Number, 
        default: 0
    },
    share :{
        type: Number, 
        default: 0
    }
})

module.exports = mongoose.model('likeshare', todoLikeShareModel);