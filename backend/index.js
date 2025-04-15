import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import DB connection
import authRoutes from './routes/auth.routes.js'; // Import auth routes
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);

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
