const userRouter = require('express').Router()
const { userController } = require('../controllers')

userRouter.get('/', (req, res, next) => userController.getUsers(res))

userRouter.get('/edit/:id', (req, res) => userController.editUser(req, res))

userRouter.post('/edit/:id', (req, res) => userController.updateUser(req, res))

module.exports = userRouter