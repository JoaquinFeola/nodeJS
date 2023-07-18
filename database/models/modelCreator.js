const { Sequelize } = require('sequelize');
const modelSys = new Sequelize(require('../dbConfig'));

module.exports = modelSys;