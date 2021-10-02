const router = require('express').Router();
const AuthController = require('../Controllers/auth_controllers.js');
require("../config/passport");



// Private Route, logged In User Can Access it.
router.get("/", AuthController.getUser);

router.post("/", AuthController.passportLogIn);

// router.post("/login", AuthController.newLogIn);

module.exports = router;





