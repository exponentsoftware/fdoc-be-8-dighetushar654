const router = require('express').Router();
const TodoController = require('../Controllers/todo_controllers')
const passport = require("passport");
const express = require("express");
app = express();
app.set('view-engine', 'ejs');


//Create Todo 
router.post('/',passport.authenticate('jwt',{session:false}), TodoController.create_todo);

//Get Todo by Id
router.get("/", TodoController.get_todo);

//Update Todo by Id
router.patch('/:id', TodoController.update_todo);

//Delete Todo item using Id
router.delete("/:id", TodoController.delete_todo);

// Get All todos
// router.get("/",TodoController.getAll_todo);

router.get("/simple", passport.authenticate('jwt',{session:false}), function (req, res, next) {
    res.render('index.ejs', { name: "Tushar"});
})

router.get("/gettodo",TodoController.getCompletedTask);
module.exports = router;