const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Emp = sequelize.define('empployee12', {
  e_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  e_name: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  e_email: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  e_password: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'emp',
  timestamps: false
});

module.exports = Emp;