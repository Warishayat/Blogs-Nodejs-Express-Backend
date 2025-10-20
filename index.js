const express = require('express');
const body_parser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require('cors')
const ConnectDB = require('../Blogs-Nodejs-Express-Backend/Config/database')
const AuthRoutes = require('../Blogs-Nodejs-Express-Backend/Routes/AuthRoutes')
const  Authenticate = require("../Blogs-Nodejs-Express-Backend/Middleware/Authenticate")
const post_router = require('../Blogs-Nodejs-Express-Backend/Routes/PostRouter')
const contact_router = require('../Blogs-Nodejs-Express-Backend/Routes/FormRouter')
const app = express()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080 ;
ConnectDB(); 

app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"],
}));


app.get("/ping",(req,res)=>{
    res.send("pong");
})

app.use('/auth/', AuthRoutes);
app.use('/post/',Authenticate,post_router)
app.use('/message/',contact_router)


app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`)
})