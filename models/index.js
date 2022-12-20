// import models
const Product = require('./Productv');
const Cart = require('./Cartv');
const Users = require('./Usersv');
const Category = require('./Categoryv');
const User = require('./Usersv');

// Cart.hasMany(Users, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE"

// })
// Users.belongsTo(Cart, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE"  

// }), 


// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"

})


Product.hasOne(Cart)

Cart.belongsTo(Product)

// User.belongsToMany(Product, {
//   through: Cart
// })

// Product.belongsToMany(User, {
//   through: Cart
// })

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"

})

// Cart.hasOne(Product)

// Product.belongsTo(Cart)
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
module.exports = {
  Product,
  Users,
  Cart,
  Category
  
  
};

