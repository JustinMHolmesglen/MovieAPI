const express = require("express")
const router = express.Router();
const { User } = require('../models/reviews')
const mongoose = require('mongoose')
const reviewController = require('../controllers/reviews')
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

router.post('/:userId', auth, reviewController.addReview)

// router.get('/', reviewController.getAllReviews)

// router.get('/:id', reviewController.singleReview)



module.exports = router
