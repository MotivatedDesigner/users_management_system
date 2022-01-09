import { Router } from 'express'

export const usersRouter = Router()

usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource')
})