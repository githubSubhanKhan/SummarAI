const express = require('express');
const Post = require('../models/Post')
const router = express.Router();


// POST route to create a new post
router.post('/createpost', async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  // Create a new post object
  const newPost = new Post({
    title // Assuming comments is an array (empty or with existing comments)
  });

  try {
    // Save the new post to the database
    await newPost.save();

    // Respond with the saved post
    res.status(201).json({
      message: 'Post created successfully',
      post: newPost,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

// POST route to add a comment to a post
router.post('/:postId/addcomment', async (req, res) => {
  const { postId } = req.params;
  const { username, comment } = req.body;

  if (!username || !comment) {
    return res.status(400).json({ error: 'Username and comment are required' });
  }

  try {
    // Find the post by ID and update it by adding the new comment
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comments: { username, comment } },  // Push the new comment to the comments array
      },
      { new: true }  // Return the updated post
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Respond with the updated post
    res.status(200).json({
      message: 'Comment added successfully',
      post,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding comment' });
  }
});

// GET route to fetch all posts
router.get('/fetchposts', async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await Post.find();

    // Return the posts in the response
    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

// GET route to fetch all comments for a specific post
router.get('/:postId/getcomments', async (req, res) => {
  const { postId } = req.params;

  try {
      // Find the post by ID
      const post = await Post.findById(postId);

      if (!post) {
          return res.status(404).json({ error: 'Post not found' });
      }

      // Send the comments as the response
      res.status(200).json({
          message: 'Comments fetched successfully',
          comments: post.comments, // Return the comments array
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching comments' });
  }
});

// GET route to fetch all comments for a specific post and concatenate them
router.get('/:postId/getsummarizedcomments', async (req, res) => {
  const { postId } = req.params;

  try {
      // Find the post by ID
      const post = await Post.findById(postId);

      if (!post) {
          return res.status(404).json({ error: 'Post not found' });
      }

      // Fetch comments and concatenate them into a single string
      const comments = post.comments || [];
// Extract only the comment field from each object
const commentTexts = comments.map(c => c.comment);
// Remove duplicates
const uniqueComments = [...new Set(commentTexts)];
// Concatenate comments
const combinedComments = uniqueComments.join('. ');

      // Send the concatenated comments as the response
      res.status(200).json({
          message: 'Comments fetched and concatenated successfully',
          combinedComments: combinedComments, // Return the concatenated comments
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching comments' });
  }
});


module.exports = router;