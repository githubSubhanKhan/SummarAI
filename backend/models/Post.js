const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const PostSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: { type: [String], default: [] },
  comments: [CommentSchema], // Array of comments
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
