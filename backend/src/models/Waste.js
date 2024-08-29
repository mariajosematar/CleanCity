const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Waste = sequelize.define('Waste', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  collectionDay: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Waste;