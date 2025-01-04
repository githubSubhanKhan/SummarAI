const express = require('express');
const User = require('../models/User'); // Adjust path to User model

const router = express.Router();

// POST route for registering a user
router.post('/register', async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        // Validate input
        if (!username || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        res.status(500).json({ error: error.message });
    }
});

// POST route for logging in a user
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // If the username and password match, return success message
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
