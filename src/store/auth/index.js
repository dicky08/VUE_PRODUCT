import axios from 'axios'
const { URL } = require('../../helper/env')
const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}
const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return alert('Silahkan login terlebih dahulu!')
    }
  }
}
const actions = {
  registrasi (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/register`, payload)
        .then((result) => {
          resolve(result.data.Message)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/users/login`, payload)
        .then((result) => {
          localStorage.setItem('token', result.data.data.accessToken)
          localStorage.setItem('refreshToken', result.data.data.refreshToken)
          console.log(result)
          resolve(result.data.message)
        }).catch((err) => {
          if (err.message === 'Request failed with status code 404') {
            alert('email has not been registered')
          } else if (err.message === 'Request failed with status code 403') {
            alert('Email has not been activated! ')
          } else {
            alert('Wrong password!')
          }
        })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions
}
