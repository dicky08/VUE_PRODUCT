import axios from 'axios'
const { URL } = require('../../helper/env')
const state = () => {
  return {
    category: []
  }
}

const getters = {
  getAllCategory (state) {
    return state
  }
}

const mutations = {
  SET_CATEGORY (state, payload) {
    state.category = payload
  }
}

const actions = {
  async getAllCategory (context, payload) {
    try {
      const result = await axios.get(`${URL}/category/getAll`)
      context.commit('SET_CATEGORY', result.data)
    } catch (error) {
      alert(error)
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
