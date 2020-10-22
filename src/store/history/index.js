import axios from 'axios'
const { URL } = require('../../helper/env')

const state = () => {
  return {
    dataHistory: [],
    dataDetail: [],
    history_detail: []
  }
}
const getters = {
  getHistory (state) {
    return state
  },
  getDetail (state) {
    return state
  },
  get_history_detail (state) {
    return state.history_detail
  }
}

const mutations = {
  SET_HISTORY (state, payload) {
    state.dataHistory = payload
  },
  SET_DETAIL (state, payload) {
    state.dataDetail = payload
  },
  SET_HISTORY_DETAIL (state, payload) {
    state.history_detail = payload
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
          resolve(result.data)
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
  },
  getHistoryDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${URL}/history_detail/getAll`)
        .then((result) => {
          context.commit('SET_HISTORY_DETAIL', result.data.data)
          resolve(result.data.data)
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
