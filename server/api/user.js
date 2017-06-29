const express = require('express')
const router = express.Router()
const User = require('../models/user')

// 查询所有用户
router.get('/user', (req, res) => {
  User.find({})
    .sort({update_at: -1})
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.json(err)
    })
})

// 通过id查找单个用户
router.get('/user/:id', (req, res) => {
  User.findById(req.params.id).then(users => {
    res.json(users)
  }).catch(err => {
    res.json(err)
  })
})

// 添加用户
router.post('/user/add', (req, res) => {
  User.create(req.body, (err, movie) => {
    if (err) {
      res.json(err)
    } else {
      res.json(movie)
    }
  })
})

// 更新用户
router.put('/user/update/:id', (req, res) => {
  User.findOneAndUpdate({_id: req.params.id},
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
      }
    }, {new: true})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// 删除一部电影
router.delete('/user/delete/:id', (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  })
    .then(user => res.send('删除成功'))
    .catch(err => res.json(err))
})

module.exports = router
