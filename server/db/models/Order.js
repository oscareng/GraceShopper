const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("Order", {
  ordernumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true },
    defaultValue: 1,
  },
  totalprice: { type: Sequelize.INTEGER },
  state: { type: Sequelize.ENUM("incomplete", "complete") },
});

module.exports = Order;
