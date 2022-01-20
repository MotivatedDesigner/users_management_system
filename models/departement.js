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
      allowNull: false,
      validate: { len: [2,20], notEmpty: true, notNull: true }
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