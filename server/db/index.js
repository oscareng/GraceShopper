//this is the access point for all things database related!

const db = require("./db");
const Product = require("./Product");
const User = require("./models/User");

//associations could go here!
User.hasMany(Product, { foreignKey: CartItemsId });
Product.belongsTo(User, { foreignKey: CartItemsId });

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
