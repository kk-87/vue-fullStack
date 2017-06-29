import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

// iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// axios添加到原型,方便组件调用
import axios from './assets/js/http.js'
Vue.prototype.axios = axios;

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
