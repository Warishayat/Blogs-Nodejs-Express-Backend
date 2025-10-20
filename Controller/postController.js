const Post = require("../Models/Post");
const { findByIdAndUpdate, findOneAndUpdate } = require("../Models/User");
const dotenv = require("dotenv").config();

const CreatPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user._id;
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required.",
      });
    }
    const NewPost = new Post({ title, content, author });
    await NewPost.save();
    return res.status(201).json({
      success: true,
      message: "Post created successfully.",
      post: NewPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internel Server Error",
    });
  }
};

const getallPost = async (req, res) => {
  try {
    all_post = await Post.find();
    if (!all_post) {
      return res.status(301).json({
        success: false,
        message: "No Post Found",
      });
    }
    return res.status(201).json({
      success: true,
      message: all_post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internel Server Error",
    });
  }
};

const getsinglepost = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = await Post.findById(id);
    if (!exist) {
      return res.status(301).json({
        success: false,
        message: "No post found",
      });
    }
    return res.status(200).json({
      success: true,
      message: exist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findOneAndDelete({
      _id: id,
      author: req.user._id,
    });

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found or you are not authorized to delete it",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post has been deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const UpdatePost = async (req, res) => {
  try {
    const {id} = req.params
    const { title, content } = req.body;
    const authorId = req.user._id;
    const update_post = await Post.findOneAndUpdate(
      { _id: id, author: authorId },
      { title, content },
      { new: true, runValidators: true }
    );
    if (!update_post) {
      return res.status(404).json({
        success: false,
        message: "Failed to update post.Try again later.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Post updated successfully.",
      post: update_post,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};


const deleteallpost=async(req,res)=>{
    try {
        deleted = await Post.deleteMany({author:req.user._id})
        if (deleted.deletedCount === 0) {
        return res.status(404).json({
        success: false,
        message: "No posts found to delete.",
      });
    }
        return res.status(201).json({
            success:true,
            message:"Delete all posts successfully."
        });
        
    }catch(error) {
     return res.status(500).json({
        success:false,
        message:"Internel Server Error"
     });   
    }
}
module.exports = {
  CreatPost,
  getallPost,
  getsinglepost,
  UpdatePost,
  deletePost,
  deleteallpost,
};