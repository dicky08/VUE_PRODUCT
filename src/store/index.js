import Vue from 'vue'
import Vuex from 'vuex'
// import products from './product/'
import product from './product/'
import category from './category/'
import auth from './auth/'
import history from './history/'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    GET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    async getProducts (context) {
      try {
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            context.commit('GET_PRODUCTS', response.data)
          })
      } catch (error) {
        alert(new Error(error))
      }
    }
  },
  modules: {
    product,
    category,
    auth,
    history
  }
})
