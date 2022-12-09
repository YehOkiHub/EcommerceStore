// import models
const Product = require('./Product');



// Products belongsTo Category


// Categories have many Products


// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
module.exports = {
  Product
  
};
