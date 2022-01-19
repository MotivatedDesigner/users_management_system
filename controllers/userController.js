const { User, Departement } = require('../models')

module.exports = { getUsers, editUser, updateUser, deleteUser }

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
  const user = await User.findOne({ where: { id: req.params.id } })
  const departements = user ? await Departement.findAll() : null
  
  res.render('users/edit', {user, departements})
} 

async function updateUser(req, res) {
  const {id, ...others} = req.body
  await User.update(others, {
    where: { id: id }
  })
  res.redirect('back')
} 

async function deleteUser(req, res) {
  const id = req.params.id
  await User.destroy({
    where: { id }
  })
  res.redirect('back')
} 