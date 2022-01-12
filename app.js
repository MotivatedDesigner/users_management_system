const logger = require('morgan')
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')

const {userRouter, departementRouter} = require('./routes')

const app = express()

app.set('views', 'views')
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))

app.get('/', (req, res) => res.render('index',{lala: 12}) )
app.use('/users', userRouter)
app.use('/departements', departementRouter)

app.use( (req, res, next) => next(createError.NotFound) )

app.use( (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

app.listen(3333, () => console.log('Server is Up'))


