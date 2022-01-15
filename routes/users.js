const userRouter = require('express').Router()
const { userController } = require('../controllers')

userRouter.get('/', (req, res, next) => userController.getUsers(res))

userRouter.get('/edit/:id', (req, res, next) => userController.editUser(req, res))

module.exports = userRouter