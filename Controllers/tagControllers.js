const Tag = require('../Models/tagsModel');
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");


exports.create_tag = async (req, res) => {
    try {
        const {title, category, todo_id} = req.body;
        const newTag = new Tag({
            title,
            category,
            user:req.user.id,
            todo_id: todo_id,
        });
        const newtag = await newTag.save();
        res.status(200).json(newtag);

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.getall_tags = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.update_tags = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}

exports.delete_tag = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(500).json({err});
    }
}
