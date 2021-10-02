const Comment = require('../Models/commModel');
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");


exports.create_comment = async (req, res) => {
    try {
        const {text, todo_id} = req.body;
        const newComment = new Comment({
            text,
            todo_id,
            posted_by: req.user.id,
        });
        const newcom = await newComment.save();
        res.status(200).json(newcom);

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.get_comment = async (req, res) => {
    try {
        const comments = await Comment.find({ todo_id: req.params.id });
        res.status(200).json(comments);
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.update_comment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{new:true});
        res.status(200).json(comment);
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.delete_comment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment has been deleted");
    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}
