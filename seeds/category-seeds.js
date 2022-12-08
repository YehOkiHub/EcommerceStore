const { Category } = require('../models');

const categoryData = [
  {
    category_name: '5 Watches a Man should Own',
  },
  
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
