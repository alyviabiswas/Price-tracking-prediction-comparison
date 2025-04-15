import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import DB connection
import authRoutes from './routes/auth.routes.js'; // Import auth routes
<<<<<<< HEAD
import productRoutes from './routes/products.js';
=======
import cors from 'cors';
>>>>>>> 76208c7cb8fe589c9cf1dbfbdcaf75d7dbcec055

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const productRoutes = require('./routes/products');

app.use('/api/products', productRoutes);

// Middleware
app.use(express.json()); // To parse JSON

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use('/api/auth', authRoutes); // Registers `/api/auth/register`

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
