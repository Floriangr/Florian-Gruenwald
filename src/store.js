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
      console.log("token after logout", state.token)
      router.replace('/');
    }
  },
  actions: {
    login({ commit }, authData) {
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
          console.log(res);
        })
        .catch(e => console.log(e));
    },
    logout({ commit }) {
      commit('logoutUser')
    }
  },
  getters: {}
});
