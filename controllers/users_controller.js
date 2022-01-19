const { User, Departement } = require('../models')

module.exports = { getUsers, editUser, updateUser, deleteUser }

async function getUsers(req, res) {
  const offset = req.params.page ?? 0

  const users = await User.findAndCountAll({
    attributes: {
      exclude: ['DepartementId']
    },
    include: {model: Departement, attributes : ['name']},
    offset: offset,
    limit: 10
  })
  
  res.render('users/index', {users})
} 

async function editUser(req, res) {
  const id = req.params.id
  const user = await User.findOne({ where: { id } })
  const departements = user ? await Departement.findAll() : null
  
  res.render('users/edit', {user, departements})
}
async function updateUser(req, res) {
  const id = req.params.id
  const data = req.body
  await User.update(data, {where: { id }})
  res.redirect('/users')
} 

async function addUser(_, res) {
  const departements = await Departement.findAll()
  res.render('users/add', {departements})
} 
async function createUser(req, res) {
  const data = req.body
  await User.create(data)
  res.redirect('/users')
} 

async function deleteUser(req, res) {
  const id = req.params.id
  await User.destroy({ where: {id} })
  res.redirect('back')
} 