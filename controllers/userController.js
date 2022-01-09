const { User, Departement } = require('../models')

async function getUsers(res) {
  const users = await User.findAll({
    attributes: {
      exclude: ['DepartementId']
    },
    include: {model: Departement, attributes : ['id', 'name']},
  })
  res.render('users', {users})
} 

module.exports = {
  getUsers
}