const router = require("express").Router();
const commController = require("../Controllers/commControllers");

router
    .post("/", commController.create_comment)
    .get("/", commController.getall_comment)
    .delete("/:id", commController.delete_comment);

module.exports = router;