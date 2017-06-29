import axios from 'axios'

// axios默认配置
axios.defaults.timeout = 5000;  //超时时间
axios.defaults.baseURL = '';  //默认地址
axios.defaults.headers = {'X-Token': localStorage.token};   //默认headers

export default axios;


