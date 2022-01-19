const fs =  require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const config = require(__dirname + '/../config/config.json')[process.env.NODE_ENV]
const sequelize = new Sequelize(config.database, config.username, config.password, config)
const models = {}

fs
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    models[model.name] = model
  });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

module.exports = models
