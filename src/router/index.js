import Vue from 'vue'
import VueRouter from 'vue-router'
import Business from '@/pages/business';
import About from '@/pages/about';
import Future from '@/pages/future';
import JoinUs from '@/pages/joinus';
import Cooperation from '@/pages/cooperation';
import Resources from '@/pages/resources';
import Message from '@/pages/message';
import Home from '@/pages/home/entrance';
import Layout from '@/layout';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'home',
      component: Home
    }]
  },
  {
    path: '/business',
    component: Layout,
    children: [{
      path: '',
      name: 'home',
      component: Business
    }]
  },
  {
    path: '/about',
    component: Layout,
    children: [{
      path: '',
      name: 'about',
      component: About
    }]
  },
  {
    path: '/future',
    component: Layout,
    children: [{
      path: '',
      name: 'future',
      component: Future
    }]
  },
  {
    path: '/joinus',
    component: Layout,
    children: [{
      path: '',
      name: 'joinus',
      component: JoinUs
    }]
  },
  {
    path: '/resources',
    component: Layout,
    children: [{
      path: '',
      name: 'resources',
      component: Resources
    }]
  },
  {
    path: '/cooperation',
    component: Layout,
    children: [{
      path: '',
      name: 'cooperation',
      component: Cooperation
    }]
  },
  {
    path: '/message',
    component: Layout,
    children: [{
      path: '',
      name: 'message',
      component: Message
    }]
  },
]


const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router;