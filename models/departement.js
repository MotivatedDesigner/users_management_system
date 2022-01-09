const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Departement extends Model {
    static associate(models) {
      this.hasMany(models.User)
    }
  }
  Departement.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Departement',
  })
  return Departement
}