// import models
const Product = require('./Product');
const Category = require('./Category');


// Products belongsTo Category
Product.belongsTo(Category,{
    foreignKey: "category_id",
    onDelete: "CASCADE"

}),

// Categories have many Products
Category.hasMany(Product,{
  foreignKey: "category_id"
})

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
module.exports = {
  Product,
  Category
};
