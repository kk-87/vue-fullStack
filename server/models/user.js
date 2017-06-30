/**
 * 用户信息
 */
const mongoose = require('./db')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String},     // 用户账号
  age: {type: String},      // 年龄
  address: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
