const express = require("express");
const router =  express.Router();
const HomeData = require("./Data/Home/HomeData")


/**
 * API
 * Home page hotdata 
 * cross domain using cors
 * return json file
 */
router.get("/Home/hot1",(req,res)=>{
    res.send({
        status:200,
        result:HomeData.hot1
    })
})

router.get("/Home/hot2",(req,res)=>{
    res.send({
        status:200,
        result:HomeData.hot2
    })
})

module.exports = router;