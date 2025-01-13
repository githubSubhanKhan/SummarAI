const express = require('express');
const connectToMongo = require('./config/db'); // Adjust path to your db.js file
const cors = require('cors');
require('dotenv').config();

const app = express();

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

app.use('/', (req, res) => {
  res.send('server is working');
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.BACKEND_URL+process.env.PORT}`);
});
