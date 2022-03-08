const Sequelize = require('sequelize');
const db = require('../db');
const LineItem = db.define('LineItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  saleprice: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 20 },
  size: { type: Sequelize.STRING, allowNull: false, defaultValue: 'Medium' },
  quantity: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
  imageUrl: { type: Sequelize.STRING, defaultValue: 'png' },
});

module.exports = LineItem;
