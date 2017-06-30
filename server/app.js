const express = require('express')
const bodyParser = require('body-parser')    // 处理post请求的中间件
let mongoose = require('./models/db')
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000        // 服务器端口

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'))

const index = require('./api/index')
const movie = require('./api/movie')
const user = require('./api/user')
const crawler = require('./api/crawler')

app.use('/',index)
app.use('/api',movie)
app.use('/api',user)
app.use('/api',crawler)

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

module.exports = app
