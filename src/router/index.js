import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    { // 路由重定向
      path: '/', redirect: '/index'
    },
    { // 主页
      path: '/index',
      component:(resolve) => require(['views/index/index'], resolve),
    },
    { // 电影列表
      path:'/movie/list',
      component:(resolve) => require(['views/movie/list'], resolve),
    },
    { // 电影列表详情
      path:'/movie/info',
      component:(resolve) => require(['views/movie/info'], resolve),
    },
    { // 用户列表
      path:'/user/list',
      component:(resolve) => require(['views/user/list'], resolve),
    },
    { // 用户列表
      path:'/crawler',
      component:(resolve) => require(['views/crawler/crawler'], resolve),
    },
  ]
})








