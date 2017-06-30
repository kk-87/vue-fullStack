/**
 * 网名列表
 */
const mongoose = require('./db')
const Schema = mongoose.Schema;

var UsertextSchema = new Schema({
  name: {type: String},     // 用户账号
});

module.exports = mongoose.model('Usertext', UsertextSchema);

