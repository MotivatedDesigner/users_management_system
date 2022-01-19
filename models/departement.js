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
    name: {
      type: DataTypes.STRING,
      validate: { len: [2,20], notEmpty: true }
    },
    description: {
      type: DataTypes.TEXT,
      validate: { max: [300] }
    },
  }, {
    sequelize,
    modelName: 'Departement',
  })
  return Departement
}