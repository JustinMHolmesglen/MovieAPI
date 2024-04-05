const express = require("express")
const router = express.Router();
const { User } = require('../models/users')
const mongoose = require('mongoose')
const usersControllers = require('../controllers/users')
const { user } = require("fontawesome");
// const multer = require('multer');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const { validateUser } = require('../models/users')
const auth = require("../middleware/auth")



router.get("/", (req, res) => {
    // res.send("All Users")
    const imagePath ="";
    res.render("register_user", { title: "Register User", imagePath: imagePath, users: user })
});

// router.post('/register', usersControllers.registerUser)

module.exports = router;