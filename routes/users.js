const express = require("express")
const router = express.Router();
const userControllers = require('../controllers/users')
const auth = require("../middleware/auth")


// router.get("/", userControllers.getAllUsers)

router.get("/me", auth, userControllers.getUserTokenId)

module.exports = router;