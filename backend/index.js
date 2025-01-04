const express = require('express');
const connectToMongo = require('./config/db'); // Adjust path to your db.js file
const cors = require('cors');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectToMongo();

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Import routes
const userRoutes = require('./routes/auth'); // Adjust path to your route file
app.use('/api/auth', userRoutes); // Prefix routes with '/api'
const postRoutes = require('./routes/post')
app.use('/api/post', postRoutes); // Prefix routes with '/api'

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
