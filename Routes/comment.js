const router = require("express").Router();
const commController = require("../Controllers/commControllers");
const passport = require("passport");

router
    .post("/",passport.authenticate('jwt',{session:false}), commController.create_comment)
    .get("/:id", commController.get_comment)
    .put("/:id", commController.update_comment)
    .delete("/:id", commController.delete_comment);

module.exports = router;