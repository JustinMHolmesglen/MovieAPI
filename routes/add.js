const express = require("express")
const router = express.Router();
const { User } = require('../models/users')
const usersControllers = require('../controllers/users')
const mongoose = require('mongoose')
const { fileUploader, validateFile } = require('../util/fileUploader')
const fs = require('fs');
const { users } = require("fontawesome");
var path = require('path');
const { validateUser } = require('../models/users')
const auth = require("../middleware/auth")



// router.get("/", (req, res) => {
//     // res.send("All Users")
//     res.render("add_users", { title: "Add Users", users: users})
// });


// router.post('/', usersControllers.addUser)
    
    
    
    

module.exports = router;