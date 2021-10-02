const router = require("express").Router();
const LikeShare = require("../Models/todoLikeShareModel");
const LikeController = require("../Controllers/like_controllers");


router.post("/", LikeController.likesTodos);

module.exports = router;
