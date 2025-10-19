const mongoose = require('mongoose');
const {Schema,model} = require('mongoose');

const Post = new Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    created_At:{
        type:Date,
        default: Date.now,

    }
})

const PostModel = model('Posts',Post);
module.exports = PostModel;