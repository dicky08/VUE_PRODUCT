import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/plugin/echart'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import { URL } from '../src/helper/env'
import axios from 'axios'
import VueCharts, { Bar, Line } from 'vue-chartjs'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(Bar)
Vue.use(Line)
Vue.use(VueCharts)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  if (response.data.message === 'ExpiredToken ') {
    return new Promise((resolve, reject) => {
      const refresh = localStorage.getItem('refreshToken')
      axios.post(`${URL}/users/token`, {
        token: refresh
      })
        .then((result) => {
          localStorage.setItem('token', result.data.data.newToken)
          window.location = '/product'
        })
        .catch((er) => {
          console.log(er.message)
        })
    })
  } else {
    return response
  }
})
axios.defaults.headers = {
  token: localStorage.getItem('token')
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
