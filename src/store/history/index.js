import axios from 'axios'
const { URL } = require('../../helper/env')

const state = () => {
  return {
    dataHistory: [],
    dataDetail: []
  }
}
const getters = {
  getHistory (state) {
    return state
  },
  getDetail (state) {
    return state
  }
}

const mutations = {
  SET_HISTORY (state, payload) {
    state.dataHistory = payload
  },
  SET_DETAIL (state, payload) {
    state.dataDetail = payload
  }
}
const actions = {
  insertHistory (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/history/insert`, payload)
        .then((result) => {
          resolve(result.data.message)
        })
        .catch((err) => {
          reject(err.message)
        })
    })
  },
  getHistory (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/history/getAll`)
        .then((result) => {
          context.commit('SET_HISTORY', result.data)
          console.log(result)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/history/getJoin`)
        .then((result) => {
          context.commit('SET_DETAIL', result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
