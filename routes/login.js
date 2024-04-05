const express = require("express")
const router = express.Router();
const { Review } = require('../models/reviews')
const { User } = require('../models/users')
const mongoose = require('mongoose')
const usersControllers = require('../controllers/users')
const authControllers = require('../controllers/auth')
// const { user } = require("fontawesome");

router.get("/", (req, res) => {
    // res.send("All Users")
    res.render("login", {  title: "Login User" })
});
//user: user
//login
// router.post("/login/:user", usersControllers.login)
// router.post("/login", usersControllers.login)
//dan class
// router.post("/:id", authControllers.postLogin)
//stack overflow
// router.get('/:id', authControllers.checkUser);


module.exports = router;