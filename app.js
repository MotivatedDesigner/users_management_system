import logger from 'morgan'
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'

import { usersRouter } from './routes/index.js'

const app = express()

app.set('views', 'views')
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index', { title: 'Express' }) )
app.use('/users', usersRouter)

app.use( (req, res, next) => next(createError(404)) )

app.use( (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

app.listen(3000, () => console.log('Server is Up'))


