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

exports.getall_comment = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.update_comment = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.delete_comment = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}
