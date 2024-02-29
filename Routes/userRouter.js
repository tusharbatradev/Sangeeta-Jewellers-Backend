const express = require('express');
const router = express.Router();

// Importing controllers for handling User's registration and signin operation
const {
    registration,
    getUser,
    loginUser
} = require("../Controllers/userController")

// Route to handle registration for the user
router.post("/signup", registration)

// Route to handlle get all user
router.get("/", getUser)

// Route to handle Login for a user.
router.post("/login", loginUser)

module.exports = router