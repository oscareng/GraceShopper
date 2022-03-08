//this is the access point for all things database related!

const db = require("./db");
const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");
const LineItem = require("./models/LineItem");

//associations could go here!
User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.hasMany(Product);
Product.belongsTo(LineItem);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    LineItem,
  },
};
