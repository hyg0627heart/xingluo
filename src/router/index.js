import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home';
import Service from '../pages/services/Service';
import Success from '../pages/success/Success';
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/success',
      component: Success
    }
  ]
})

export default router