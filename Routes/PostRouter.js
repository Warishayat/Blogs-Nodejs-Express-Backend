const express = require('express');
const post_router = express.Router();

const {CreatPost,getallPost} = require('../Controller/postController')

post_router.post("/createpost",CreatPost)
post_router.get('/allpost',getallPost)


module.exports = post_router;