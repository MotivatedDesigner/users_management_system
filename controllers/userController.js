const { User, Departement } = require('../models')

module.exports = { getUsers, editUser }

async function getUsers(res) {
  const users = await User.findAndCountAll({
    attributes: {
      exclude: ['DepartementId']
    },
    include: {model: Departement, attributes : ['name']},
    offset: 0,
    limit: 10
  })
  res.render('users/index', {users})
} 

async function editUser(req, res) {
  const user = await User.findOne({
    where: {
      id: req.params.id
    }
  })
  res.render('users/edit', {user})
} 