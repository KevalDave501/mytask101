const Sequelize = require('sequelize');

const sequelize = new Sequelize('empployee12', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;