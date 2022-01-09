const userRouter = require('express').Router()
const { userController } = require('../controllers')

userRouter.get('/', (req, res, next) => userController.getUsers(res))

module.exports = userRouter