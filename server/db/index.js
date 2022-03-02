//this is the access point for all things database related!

const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');

//associations could go here!
User.hasMany(Product);
Product.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
