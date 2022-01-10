const departementRouter = require('express').Router()
const { departementController } = require('../controllers')

departementRouter.get('/', (req, res, next) => departementController.getDepartements(res))

module.exports = departementRouter