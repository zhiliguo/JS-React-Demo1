const express = require("express");
const app = express();
const router = require("./router")
const cors = require("cors")

//cross domain use cors backend
app.use(cors())
//use router using 5566port 
//localhost:5566/api/Home/hot1 or hot2
app.use("/api", router)

//waiting response
app.listen(5566,()=>{
    console.log("Server is runing 5566 port")
}) 
