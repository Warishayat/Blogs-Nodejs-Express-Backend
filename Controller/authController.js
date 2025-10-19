const userModel = require('../Models/User')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv').config()

const Signup_user = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const exist = await userModel.findOne({email});
        if (exist){
            return res.status(404).json({
                success:false,
                message: "User is found already .You can login."
            })
        }
        const hash_pass = await bcrypt.hash(password,10);
        const newUser = new userModel({name,email,password:hash_pass})
        await newUser.save();
        res.status(201).json({
            success:true,
            message : "User has been created successfully"
        })
        

    } catch (error) {
        return res.status(500).json({
            success:false,
            message : "Error due to internal server."
        })
        
    }
}

const Login_user = async(req,res)=>{
    try {
        const {email,password} = req.body;
        exist = await userModel.findOne({email});
        if (!exist){
            return res.status(404).json({
                success : false,
                message : "Wrong Email or password"
            });
        }
        const curr_pass = exist.password;
        const match_password = await bcrypt.compare(password,curr_pass)
        if(!match_password){
            return res.status(401).json({
                success: false,
                message : 'Wrong Email or password'
            })
        }
        
        const token = jsonwebtoken.sign(
            {email:exist.email,_id:exist._id},
            process.env.JWT_SECRET,
            { expiresIn: "24h" }   
        )
        console.log('Token is getting genrated')
        return res.status(201).json({
            success:true,
            token,
            email : exist.email,
            name:exist.name
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message : "Internal Server Error"
        });

    }
}

module.exports = {
    Signup_user,
    Login_user
}