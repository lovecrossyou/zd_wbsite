import 'babel-polyfill'

import Vue from 'vue'
import routers, {Router} from '@/router'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import App from './App.vue';
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
new Vue({
  el: '#app',
  store,
  //让vue知道我们的路由规则
  router: router, //可以简写router
  render: c => c(App),
})
