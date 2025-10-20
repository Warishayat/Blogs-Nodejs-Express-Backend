const express = require('express');
const post_router = express.Router();

const {
  CreatPost,
  getallPost,
  UpdatePost,
  deletePost,
  getsinglepost,
  deleteallpost,
} = require('../Controller/postController');

post_router.post('/createpost', CreatPost);
post_router.get('/allpost', getallPost);
post_router.get('/singlepost/:id', getsinglepost);
post_router.put('/updatepost/:id', UpdatePost);
post_router.delete('/deletepost/:id', deletePost);
post_router.delete('/deleteall', deleteallpost);

module.exports = post_router;
