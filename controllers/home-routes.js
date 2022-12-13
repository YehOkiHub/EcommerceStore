const router = require('express').Router();
const {Product, Category, Cart} = require("../models/index")
const auth = require('../utils/auth');
const dayjs = require('dayjs')

router.get("/", async (req, res) =>{

    let products = await Product.findAll({include: Category})    



    res.render("home", {
        products: products,
        session: req.session
    })
   


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

router.get("/dashboard", auth, async (req, res) => {

            
    let data = {
        session: req.session,
         }
    res.render("dashboard", data)
    
})

router.get("/cart", auth, async (req, res) => {
    let cartData = await Cart.findAll({
        where: {user_id: req.session.user_id}
    })
    let product_ids = []


    if(cartData == null || cartData == undefined){
        cartData = []
    }

    cartData.forEach(function(obj){
    if(obj.dataValues.product_id != undefined){
        product_ids.push(parseInt(obj.dataValues.product_id))        
    }
    })   
    console.log(product_ids)

    
    let products = await Product.findAll({
        include: [Category, Cart],
        where: {
            id: product_ids
        },
        group: ["product_id"]
    })

    let data = {
        session: req.session,
        products: products
         }
    res.render("cart", data)
    
})

router.get("/time", (req, res) => {
    let time = dayjs().format("hh:mm:ss a")
    res.json({
        time: time
    })
})

module.exports = router
