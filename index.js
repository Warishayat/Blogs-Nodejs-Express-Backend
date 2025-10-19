const express = require('express');
const body_parser = require('body-parser')
const dotenv = require('dotenv').config()
const ConnectDB = require('../Blogs-Nodejs-Express-Backend/Config/database')
const AuthRoutes = require('../Blogs-Nodejs-Express-Backend/Routes/AuthRoutes')
const  Authenticate = require("../Blogs-Nodejs-Express-Backend/Middleware/Authenticate")
const post_router = require('../Blogs-Nodejs-Express-Backend/Routes/PostRouter')


const app = express()

app.use(express.json())
const PORT = process.env.PORT || 8080 ;
ConnectDB(); 



app.get("/ping",(req,res)=>{
    res.send("pong");
})


app.use('/auth', AuthRoutes);
app.use('/post',Authenticate,post_router)


app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`)
})