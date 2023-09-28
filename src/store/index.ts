import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  // ...
  plugins: [
    createPersistedState()
  ],
  state: {
    authenticated: false,
    'token': '',
    'user': {},
    
  },
  getters: {
    getToken: state => state.token,
    getUser: state => state.user,
    authenticated(state){
            return state.authenticated 
    },

  },
   mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.authenticated = isAuthenticated
     },
    
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    authUser({ commit }, isAuthenticated) {
      commit('SET_AUTHENTICATED', isAuthenticated)
    },
    
  },
  modules: {
  }
})
