import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    token: null
  },
  mutations: {
    authUser(state, userData) {
      state.userId = userData.userId;
      state.token = userData.token;
    },
    logoutUser(state) {
      state.userId = null;
      state.token = null;
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      router.replace('/');
    }
  },
  actions: {
    setAutoLogout({ commit }, timeLimit) {
      console.log('timelimit',timeLimit)
      setTimeout(() => commit('logoutUser'),timeLimit * 1000);
    },
    login({ commit, dispatch }, authData) {
      axios
        .post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDyCHMtZzHzpR3xw-pKxTjY-xEQSy4VcdI",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const tokenExpiration = new Date(now.getTime() + res.data.expiresIn * 1000);
          dispatch('setAutoLogout', res.data.expiresIn);
          localStorage.setItem('userId', res.data.localId);
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('tokenExpiration', tokenExpiration);
        })
        .catch(e => console.log(e));
    },
    logout({ commit }) {
      commit('logoutUser')
    },
    autoLogin({ commit, dispatch }) {
      const now = new Date();
      if (localStorage.getItem('token') ) {
        commit('authUser', {
          token: localStorage.getItem('token'),
          userId: localStorage.getItem('userId')
        })
        dispatch('setAutoLogout', (new Date(localStorage.getItem('tokenExpiration')) - now) / 1000);
      }
    }
  },
  getters: {}
});
