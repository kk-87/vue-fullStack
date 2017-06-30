const mongoose = require('./db')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String, required: true},        // required,非空验证，为必填项
  poster: String,
  rating: String,
  introduction: String,
  created_at: {type: Date, default: Date.now},  // 写入时间, default: 默认值
  update_at: {type: Date, default: Date.now}    // 更新时间
})

module.exports = mongoose.model("movie",movieSchema)
