const { User, Departement } = require('../models')

module.exports = { getUsers }

async function getUsers(res) {
  const users = await User.findAndCountAll({
    attributes: {
      exclude: ['DepartementId']
    },
    include: {model: Departement, attributes : ['name']},
    offset: 0,
    limit: 10
  })
  res.render('users', {users})
} 