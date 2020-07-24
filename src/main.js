import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Login from './pages/login/Login.vue';
import Index from './pages/index/Index.vue';
import Register from './pages/register/Register.vue';

Vue.use(Login)
Vue.use(Index)
Vue.use(Register)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
