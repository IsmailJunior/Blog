const express = require( "express" );
const router = express.Router();
const passport = require("passport")
const userController = require( "../controller/User" );
const catchAsync = require( "../utils/catchAsync" );

router.post( "/register", catchAsync(userController.register) );
router.post( "/login", passport.authenticate("local"), userController.login );
router.get( "/logout", userController.logout );

module.exports = router;