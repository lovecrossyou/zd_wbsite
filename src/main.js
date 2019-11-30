import 'babel-polyfill'

import Vue from 'vue'
import router from '@/router'
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  //让vue知道我们的路由规则
  router: router, //可以简写router
  render: c => c(App),
})
