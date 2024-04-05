const express = require("express")
const router = express.Router();
const { User } = require('../models/users')
const mongoose = require('mongoose')
const usersControllers = require('../controllers/users')
const fs = require('fs');
const auth = require("../middleware/auth")

// router.get("/", (req, res) => {
//     // res.send("All Users")
//     res.render("update_user", { title: "Update User", users: user})
// });

//update user
// router.post('/:id', usersControllers.editUser)

module.exports = router;