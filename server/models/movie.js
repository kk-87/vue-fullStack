const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
  title: {type: String, required: true},  // required,非空验证
  poster: String,
  rating: String,
  introduction: String,
  created_at: {type: Date, default: Date.now},  // 写入时间
  update_at: {type: Date, default: Date.now}    // 更新时间
})

module.exports = mongoose.model("movie",movieSchema)
