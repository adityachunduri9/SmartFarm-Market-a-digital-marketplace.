require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Product = require('../models/Product');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  await User.deleteMany({});
  await Product.deleteMany({});

  const pwd = await bcrypt.hash('password123', 10);
  const farmer = await User.create({ name: 'Ramu', email: 'ramu@example.com', passwordHash: pwd, role: 'farmer', phone: '9999999999', location: 'Hyderabad' });
  const buyer = await User.create({ name: 'ShopOwner', email: 'shop@example.com', passwordHash: pwd, role: 'buyer', phone: '8888888888', location: 'Hyderabad' });

  await Product.create({
    farmer: farmer._id,
    name: 'Tomato',
    variety: 'Cherry',
    quantityKg: 500,
    pricePerKg: 25,
    harvestDate: new Date(),
    images: [],
    location: 'Medchal'
  });

  console.log('Seed done');
  process.exit();
}

run().catch(console.error);
