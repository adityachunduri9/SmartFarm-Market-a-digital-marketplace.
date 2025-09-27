const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { productId, quantityKg, offeredPricePerKg } = req.body;
  const order = await Order.create({ product: productId, buyer: req.user.id, quantityKg, offeredPricePerKg });
  res.json(order);
});

router.get('/buyer', authMiddleware, async (req, res) => {
  const orders = await Order.find({ buyer: req.user.id }).populate('product');
  res.json(orders);
});

module.exports = router;
