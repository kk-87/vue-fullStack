var request = require("request");   // 对目标url建立链接
var cheerio = require("cheerio");   // 解析http请求返回的html内容
// var async = require("async")        // 并发控制
var usertext = require('../models/nametext')
var user = new usertext();
var URL = 'http://www.oicq88.com/gufeng/';  // 爬虫需要爬取的网页地址

/**
 * node爬虫，用来爬取需要的数据
 * 参数一： 目标url
 * 参数二： 回调函数
 */
request(URL, (err, res) => {
  if (err) throw err;
  var $ = cheerio.load(res.body);

  // 拿到id起始位为dnn的元素并进行遍历
  $('.list>li>p').each(function (index, element) {
    // 添加name
    user = usertext({
      name: $(element).text()
    });
    // 保存name
    user.save(function (err, res) {
      if (err) {
        console.log("Error:" + err);
      }
      else {
        console.log("Res:" + res);
      }
    });
  })
})

