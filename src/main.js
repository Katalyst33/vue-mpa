import Vue from 'vue'
import NProgress from 'vue-nprogress'
import App from './App.vue'
import Navbar from './commons/Navbar'
import router from './router'
import Footer from './commons/Footer'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false




Vue.component('app-navbar', Navbar)
Vue.component('app-footer', Footer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
