import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import '../public/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/element.js'
import Router from 'vue-router'

axios.defaults.baseURL = '/api';

Vue.use(ElementUI);


Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app')

let express = require('express')
// 创建应用
let app = express()
 
// get请求
app.get('/user/find',(req,res)=>{
    res.send('hello')
})
 
// 启动服务,监听端口
app.listen(3000,()=>{
    console.log('启动成功...')
})

