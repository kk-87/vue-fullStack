
const express = require('express')
const router = express.Router()
const crawler = require('../models/nametext')

// 查询所有用户
router.get('/list', (req, res) => {
  crawler.find({})
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router
