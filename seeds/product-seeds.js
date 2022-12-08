const { Product } = require('../models');

const productData = [
  {
    product_name: 'ROLEX DAYTONA WITH BLACK CERACHROM BEZEL',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'IWC PORTUGIESER CHRONOGRAPH',
    price: 90.0,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'PANERAI LUMINOR 8 DAYS',
    price: 22.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'MB&F HOROLOGICAL MACHINE NO. 5',
    price: 12.99,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: 'AUDEMARS PIGUET ROYAL OAK PERPETUAL CALENDAR',
    price: 29.99,
    stock: 22,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
