const express = require("express")
const router = express.Router();
const { User } = require('../models/users')
const mongoose = require('mongoose')
const usersControllers = require('../controllers/users')
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")


router.delete('/:id', auth, usersControllers.deleteUser);


module.exports = router