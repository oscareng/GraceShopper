const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("Product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "A nice piece of clothing!",
  },
  price: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 20 },
  gender: { type: Sequelize.STRING, allowNull: false, defaultValue: "Male" },
  size: { type: Sequelize.STRING, allowNull: false, defaultValue: "Medium" },
  category: { type: Sequelize.STRING, allowNull: false, defaultValue: "Shirt" },
  stock: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
  imageUrl: { type: Sequelize.STRING, defaultValue: "png" },
  quantity: { type: Sequelize.INTEGER, defaultValue: 1 },
});

module.exports = Product;
