// const seedCategories = require('./category-seeds');
const { Product, Users, Cart, Category } = require('../models');
const productData = require('./product-seeds');
const categoryData = require('./category-seed');
const userData = require('./userseed');
const cartData = require('./cartdata');

const sequelize = require('../config/connection');
// const User = require('../models/users');
const { locale } = require('dayjs');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // await seedCategories();
  // console.log('\n----- CATEGORIES SEEDED -----\n');
  await Category.bulkCreate(categoryData);
  await Product.bulkCreate(productData);
  await Users.bulkCreate(userData, {
    individualHooks: true
  });
  await Cart.bulkCreate(cartData);
  // await seedProducts();
  // console.log('\n----- PRODUCTS SEEDED -----\n');

  process.exit(0);
};

seedAll();

// const seedProducts = () => Product.bulkCreate(productData);

