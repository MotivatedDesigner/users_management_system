const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Departement extends Model {
    static associate({ User }) {
      this.hasMany(User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
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