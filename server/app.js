const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./models/db')
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'))

const index = require('./api/index')
const movie = require('./api/movie')
const user = require('./api/user')
app.use('/',index)
app.use('/api',movie)
app.use('/api',user)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

module.exports = app
