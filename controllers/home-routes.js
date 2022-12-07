const router = require('express').Router();

router.get("/", async (req, res) =>{

    res.json("hello")
    
})

module.exports = router
