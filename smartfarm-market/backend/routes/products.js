const express = require('express');
const Product = require('../models/Product');
const authMiddleware = require('../utils/authMiddleware'); // we'll add a small helper
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 4), async (req, res) => {
  // creates a product listing
  const { name, variety, quantityKg, pricePerKg, harvestDate, location } = req.body;
  const images = (req.files || []).map(f => f.path);
  const product = await Product.create({
    farmer: req.user.id, name, variety, quantityKg, pricePerKg, harvestDate, location, images
  });
  res.json(product);
});

router.get('/', async (req, res) => {
  const q = req.query.q || '';
  const products = await Product.find({ name: new RegExp(q, 'i'), approved: true }).populate('farmer', 'name location');
  res.json(products);
});

router.get('/mine', authMiddleware, async (req, res) => {
  const products = await Product.find({ farmer: req.user.id });
  res.json(products);
});

module.exports = router;
