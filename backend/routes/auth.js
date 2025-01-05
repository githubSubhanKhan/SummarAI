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

router.post('/createadmin', async (req, res) => {
    try {
        const {username, password} = req.body;

        // Validate input
        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new admin
        const newAdmin = new User({ username, password, isAdmin: true });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully', user: newAdmin });
        
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        res.status(500).json({ error: error.message });
    }
})

// POST route for user login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        // Find the user in the database
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the user is an admin
        if (user.isAdmin) {
            // Admin login
            return res.status(200).json({ message: 'Login successful' });
        } else {
            // Regular user login
            return res.status(200).json({
                message: 'Login successful',
                username: user.username,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
