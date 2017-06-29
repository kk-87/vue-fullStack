/**
 * 用户信息
 */
var mongoose = require('./db'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String},     // 用户账号
  age: {type: String},      // 年龄
  address: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
