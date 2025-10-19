const Post = require('../Models/Post')
const dotenv = require('dotenv').config()


const CreatPost = async(req,res)=>{
    try {
        const {title,content,} = req.body;
        const author = req.user._id;
        if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Title and content are required.",
        });
        }
        const NewPost = new Post({title,content,author})
        await NewPost.save();
        return res.status(201).json({
        success: true,
        message: "Post created successfully.",
        post: NewPost,
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internel Server Error"
        })
    }
}

const getallPost = async(req,res)=>{
    try {
        all_post = await Post.find()
        if (!all_post){
            return res.status(301).json({
                success:false,
                message:'No Post Found'
            })
        }
        return res.status(201).json({
            success:true,
            message:all_post
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message : "Internel Server Error"
        })
    }
}


module.exports = {CreatPost,getallPost}