import axios from 'axios'
const { URL } = require('../../helper/env')
const state = () => {
  return {
    allData: {
      product: [],
      isLoading: false
    }
  }
}

const getters = {
  getAllProducts (state) {
    return state.allData
  },
  bestProduct (state) {
    return state.allData
  }

}
const mutations = {
  SET_DATA (state, payload) {
    state.allData.product = payload
  },
  SET_LOADING (state, payload) {
    state.allData.isLoading = payload
  },
  SET_ORDERBY (state, payload) {
    state.allData.product = payload
  },
  SET_LIMIT (state, payload) {
    state.allData.product = payload
  },
  SET_PAGINATE (state, payload) {
    state.allData.product = payload
  },
  SET_DELETE (state, payload) {
    state.allData.product = payload
  },
  SET_DETAIL_PRODUCT (state, payload) {
    state.allData.product = payload
  },
  SET_SEARCH (state, payload) {
    state.allData.product = payload
  },
  SET_PRICE (state, payload) {
    state.allData.product = payload
  }
}

const actions = {
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/product/getDetail/${payload}`)
        .then((result) => {
          resolve(result.data.data[0], payload)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  insertProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/product/insert`, payload)
        .then((result) => {
          resolve(result.data.message)
        }).catch((err) => {
          reject(err.message)
        })
    })
  },
  updateProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${URL}/product/update/${payload.id}`, payload.form)
        .then((result) => {
          resolve(result.data.message)
        }).catch((err) => {
          resolve(err)
        })
    })
  },
  getAllProducts (context, payload) {
    context.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/product/getAll`)
        .then((result) => {
          context.commit('SET_DATA', result.data)
          resolve(result.data)
        }).catch((err) => {
          reject(err)
          console.log(err.message)
        })
        .finally(() => {
          context.commit('SET_LOADING', false)
        })
    })
  },
  bestProduct (context, payload) {
    context.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/product/best-product`)
        .then((result) => {
          context.commit('SET_DATA', result.data.data)
          console.log(result)
        }).catch((err) => {
          reject(err)
          console.log(err.message)
        })
        .finally(() => {
          context.commit('SET_LOADING', false)
        })
    })
  },
  async getOrderBy (context, payload) {
    try {
      const result = await axios.get(`${URL}/product/getAll?where=${payload}`)
      context.commit('SET_ORDERBY', result.data, payload)
    } catch (error) {
      console.log(error.message)
    }
  },
  async sortingLimit (context, payload) {
    try {
      const result = await axios.get(`${URL}/product/getAll?limit=${payload}`)
      context.commit('SET_LIMIT', result.data, payload)
    } catch (error) {
      console.log(error.message)
    }
  },
  async paginate (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/product/getAll?limit=5&pages=${payload}`)
        .then((result) => {
          context.commit('SET_PAGINATE', result.data, payload)
          resolve(result.data.tableRow)
        })
        .catch((err) => {
          reject(new Error(err))
        })
    })
  },
  async deletedProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${URL}/product/delete/${payload}`)
        .then((result) => {
          resolve(result.data.message)
        })
        .catch((err) => {
          reject(new Error(err))
        })
    })
  },
  async search_Product (context, payload) {
    try {
      const result = await axios.get(`${URL}/product/getAll?name=${payload}`)
      context.commit('SET_SEARCH', result.data, payload)
    } catch (error) {
      console.log(error.message)
    }
  },
  async sortPrice (context, payload) {
    try {
      const result = await axios.get(`${URL}/product/getAll?orderBy=price&sort=${payload}`)
      context.commit('SET_PRICE', result.data, payload)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
