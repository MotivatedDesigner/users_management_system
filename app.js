const logger = require('morgan')
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')

const {userRouter, departementRouter} = require('./routes')

dotenv.config()
const app = express()

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.locals.baseUrl = `${process.env.HOST}:${process.env.PORT}`

app.use('/users', userRouter)
app.use('/departements', departementRouter)

app.use( (req, res, next) => next(createError.NotFound) )

app.use( (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

app.listen(process.env.PORT, () => console.log('Server is Up'))


