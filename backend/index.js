import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import DB connection
import authRoutes from './routes/auth.routes.js'; // Import auth routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // To parse JSON

// Routes
app.use('/api/auth', authRoutes); // Registers `/api/auth/register`

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
