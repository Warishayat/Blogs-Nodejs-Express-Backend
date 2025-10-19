const express = require('express');
const body_parser = require('body-parser')
const dotenv = require('dotenv').config()
const ConnectDB = require('../Blogs-Nodejs-Express-Backend/Config/database')
const AuthRoutes = require('../Blogs-Nodejs-Express-Backend/Routes/AuthRoutes')
const  Authenticate = require("../Blogs-Nodejs-Express-Backend/Middleware/Authenticate")



const app = express()

//  Database
app.use(express.json())
const PORT = process.env.PORT || 8080 ;
ConnectDB(); 



// Testing Route
app.get("/ping",(req,res)=>{
    res.send("pong");
})

app.get("/authenticate", Authenticate, (req, res) => {
    res.send({
        message: req.user
    });
});

// Login + Sign Route
// http://localhost:3000/auth/sign -----> for signup
// http://localhost:3000/auth/login -----> for login
app.use('/auth', AuthRoutes);




// Page Setup
app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`)
})