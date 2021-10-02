const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    role: {
        type: mongoose.Schema.Types.String,
        ref: "users"
    },
    todotitle: {
        type: String,
        trim:true
    },
    status: {
        type: String,
        trim:true
    },
    category:{
        type: String,
        enum: ['work', 'hobby', 'task'],
        default: 'task'
    },
    tags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tags"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    }]
},
   {timestamps: true},
   {strict: false});

module.exports = mongoose.model('Todo', todoSchema);