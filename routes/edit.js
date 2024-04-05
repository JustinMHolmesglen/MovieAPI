const express = require("express")
const router = express.Router();
const { User } = require('../models/users')
const mongoose = require('mongoose')
const usersControllers = require('../controllers/users')
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

router.get("/", (req, res) => {
    // res.send("All Users")
    res.render("edit_user", { title: "Edit User", users: userData})
});


router.get('/:id', usersControllers.getUsersById)

// router.post('/:id', usersControllers.editUser)
//update user
router.put('/:id', usersControllers.editUser)



module.exports = router;