//user on home page needs to be dynamic
//cannot post add - last worked 1.07pm 9-05-23


const express = require('express')
const router = express.Router()
const { User } = require('../models/users')
const mongoose = require('mongoose')

router.get('/',async (req, res) => {

    // res.send("Welcome to our bookstore 😁")
    const user = await User.find().sort()
    res.render("index", { title: "Home Page", users: user}) 
    
})

router.get("/", (req, res) => {
    res.send("All Users")
});

router.get("/", (req, res) => {
    User.find().exec((err, user) => {
        if(err){
            res.json({message: err.message})

        }else{
            res.render('index', {
                title: "Home Page",
                users: user,
            })
        }
    })
})


module.exports = router
