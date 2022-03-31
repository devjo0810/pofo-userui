'use strict'
import dayjs from 'dayjs'
// import Vue from 'vue'

const MEMBER_LIST = [
  { id: 'test1', password: 'test1', userName: '테스터1', authList: ['A', 'B', 'C'] },
  { id: 'test2', password: 'test2', userName: '테스터2', authList: ['B', 'C'] },
  { id: 'test3', password: 'test3', userName: '테스터3', authList: ['C'] }
]

const state = {
  token: null,
  userId: null,
  userName: null,
  authList: []
}

const getters = {
  getToken (state) {
    return state.token
  },
  getUserId (state) {
    return state.userId
  },
  getUserName (state) {
    return state.userName
  },
  getAuthList (state) {
    return state.authList
  }
}

const mutations = {
  setToken (state, { token }) {
    state.token = token
  },
  setUserId (state, { userId }) {
    state.userId = userId
  },
  setUserName (state, { userName }) {
    state.userName = userName
  },
  setAuthList (state, { authList }) {
    state.authList = [...authList]
  }
}

const actions = {
  async isLogin ({ commit, state }) {
    if (state.token) return true

    const token = sessionStorage.getItem('token')
    if (!token) return false

    commit('setToken', { token })
    return true
  },
  async loginCheck ({ commit }, { id, password }) {
    const member = MEMBER_LIST.find(item => item.id === id)
    // Vue.api.post('/auth/login', { id, password })
    if (!member) return false
    if (member.password !== password) return false
    await loginSuccess(commit, member)
    return true
  },
  async logout ({ commit }) {
    sessionStorage.removeItem('token')
    await Promise.all([
      commit('setToken', { token: null }),
      commit('setUserId', { userId: null }),
      commit('setUserName', { userName: null }),
      commit('setUserId', { authList: [] })
    ])
    return true
  }
}

async function loginSuccess (commit, member) {
  const { id, userName, authList } = member
  const expireDate = dayjs().add(2, 'hours').format('YYYYMMDD hh:mm')
  const token = encodeToken({
    id, userName, authList, expireDate
  })
  sessionStorage.setItem('token', token)
  await Promise.all([
    commit('setToken', { token }),
    commit('setUserId', { id }),
    commit('setUserName', { userName }),
    commit('setUserId', { authList })
  ])
}

function encodeToken (args) {
  return JSON.stringify(args)
}

// function decodeToken (token) {
//   return JSON.parse(atob(token))
// }

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
