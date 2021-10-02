const router = require("express").Router();
const tagsController = require("../Controllers/tagControllers");
const passport = require("passport");

router
    .post("/",passport.authenticate('jwt',{session:false}), tagsController.create_tag)
    .get("/", tagsController.getall_tags)
    .delete("/:id", tagsController.delete_tag)
    .put(":id", tagsController.update_tags);

module.exports = router;