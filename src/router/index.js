import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home';
import Service from '../pages/services/Service';
import Success from '../pages/success/Success';
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  routes: [{
      path: '/',
      redirect:'index'
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../pages/login/Login.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../pages/register/Register.vue')
    },
    {
      path: '/index',
      name: 'index',
      component:()=>import('../pages/index/Index.vue'),
      redirect:'home',
      children: [{
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/service',
          name: 'service',
          component: Service
        },
        {
          path: '/success',
          name: 'success',
          component: Success
        },
      ]
    },


  ]
})

export default router