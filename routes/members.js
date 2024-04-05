const express = require('express')
const router = express.Router()
const { User } = require('../models/users')
const mongoose = require('mongoose')

router.get('/',async (req, res) => {

    // res.send("Welcome to our bookstore 😁")
    const userData = await User.find().sort()
    res.render("members", { title: "User Page", userData}) 
    
})

router.get("/", (req, res) => {
    res.send("All Users")
});

router.get("/", (req, res) => {
    User.find().exec((err, user) => {
        if(err){
            res.json({message: err.message})

        }else{
            res.render('members', {
                title: "User Page",
                users: user,
            })
        }
    })
})


module.exports = router
