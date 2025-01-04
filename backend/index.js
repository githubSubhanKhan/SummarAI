const express = require('express');
const connectToMongo = require('./config/db');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
