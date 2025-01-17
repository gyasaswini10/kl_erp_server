const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
dotenv.config();

// Attempt to connect to the database
try {
  connectDB();
} catch (error) {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit process with failure
}

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    'https://kl-erp-server.onrender.com',
    'https://kl-erp-2.onrender.com',
    'https://kl-erp-1.onrender.com',
    'http://localhost:3000' // For local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
