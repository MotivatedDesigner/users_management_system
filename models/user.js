const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Departement }) {
      this.belongsTo(Departement,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [2,20], notEmpty: true, notNull: true, isAlpha: true }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [2,20], notEmpty: true, notNull: true, isAlpha: true }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { max: [50], notEmpty: true, notNull: true, isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notEmpty: true, 
        notNull: true,
        len: [8,20], 
        minLowercase: 1, 
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}