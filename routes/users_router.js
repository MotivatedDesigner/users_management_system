const userRouter = require('express').Router()
const { usersController } = require('../controllers')

userRouter.get('/', usersController.getUsers)

userRouter.get('/edit/:id', usersController.editUser)
userRouter.post('/edit/:id', usersController.updateUser)

userRouter.get('/add', usersController.addUser)
userRouter.post('/add', usersController.createUser)

userRouter.get('/delete/:id', usersController.deleteUser)


module.exports = userRouter