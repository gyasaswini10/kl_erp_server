const express = require('express');
	const cors = require('cors');
	const dotenv = require('dotenv');
	const connectDB = require('./config/db');
	const userRoutes = require('./routes/userRoutes');

	const PORT = process.env.PORT || 5000;
	dotenv.config();
	connectDB();

	const app = express();
	try {
		connectDB();
	  } catch (error) {
		console.error("Database connection failed:", error);
		process.exit(1); // Exit process with failure
	  }
	  app.use(cors({
		origin: [ 'https://kl-erp-server.onrender.com'],  // Local React app URL
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true
	  }));
	  
	app.use(cors());
	app.use(express.json());

	app.use('/api/users', userRoutes);

	app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
