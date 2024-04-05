const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth')
const usersControllers = require('../controllers/users')


router.get("/:id", usersControllers.login)
// router.post('/', authControllers.postLogin);
// router.get('/', authControllers.checkUser);

module.exports = router;