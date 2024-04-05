const express = require("express")
const router = express.Router();
const { User } = require('../models/reviews')
const mongoose = require('mongoose')
const reviewController = require('../controllers/reviews')
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

router.get('/:id', reviewController.getAllReviews)

// router.get('/:id', reviewController.singleReview)

// router.post('/:id', reviewController.addReview)


module.exports = router
