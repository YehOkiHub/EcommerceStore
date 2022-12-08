const router = require('express').Router();
const {userModel, blogModel} = require("../models/index")


router.get("/", async (req, res) => {
     let post = await blogModel.findAll({include: userModel})  
    
    let data = {
        session: req.session,
        post: post
    }

    // res.render("home", data)

})


router.get("/dashboard", async (req, res) => {

    let post = await blogModel.findAll({include: userModel})  
    
    let userPosts = [];

    post.forEach(function(row){
        if(row.user_id == req.session.user_id){
            userPosts.push(row);
        }
    })

    let data = {
        session: req.session,
        post:userPosts
    }
    res.render("dashboard", data)
    
})

router.get("/blog/add", (req, res) => {
    let data = {
        session: req.session
    }
    res.render("addblog", data)
})

router.get("/login", (req, res) => {
    let data = {
        session: req.session
    }
    res.render("login", data)
})

router.get("/register", (req, res) => {
    let data = {
        session: req.session
    }
    res.render("register", data)
})




module.exports = router;