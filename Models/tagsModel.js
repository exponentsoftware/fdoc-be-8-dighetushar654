const mongoose = require('mongoose');

const tagsModel = new mongoose.Schema({
    title :{
        type: String, 
    },
    category :{
        type: String, 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    todo_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todos"
    }
})

module.exports = mongoose.model('tags', tagsModel);