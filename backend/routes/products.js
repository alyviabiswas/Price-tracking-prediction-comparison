import express from 'express';
import Product from '../models/Product.js'


const router = express.Router();


//Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err });
  }
});

// Search by product name
router.get('/search/name', async (req, res) => {
  const query = req.query.q;
  try {
    const products = await Product.find({
      name: { $regex: query, $options: 'i' }
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error searching products by name', error: err });
  }
});

// Search by product link
router.get('/search/link', async (req, res) => {
  const link = req.query.url;
  try {
    const product = await Product.findOne({ link: link });
    if (product) {
      res.json([product]);
    } else {
      res.status(404).json({ message: 'No product found with that link' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error searching product by link', error: err });
  }
});

export default router
