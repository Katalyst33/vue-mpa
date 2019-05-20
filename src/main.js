import Vue from 'vue'
// import NProgress from 'vue-nprogress'
import App from './App.vue'
import Navbar from './components/commons/Navbar'
import router from './router'
import Footer from './components/commons/Footer'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'



Vue.config.productionTip = false

Vue.component('app-navbar', Navbar)
Vue.component('app-footer', Footer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
