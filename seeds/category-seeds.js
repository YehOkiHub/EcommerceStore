const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Product1',
  },
  {
    category_name: 'Product2',
  },
  {
    category_name: 'Product3',
  },
  {
    category_name: 'Product4',
  },
  {
    category_name: 'Product5',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
