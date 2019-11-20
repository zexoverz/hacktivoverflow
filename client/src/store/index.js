import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null
  },
  mutations: {
    SET_LOGIN(state) {
      if (localStorage.getItem("token")) {
        state.isLogin = localStorage.getItem("token");
      } else {
        state.isLogin = null
      }
    }
  },
  actions: {
    login(context, payload) {
      return axios({
        method: "post",
        url: "http://localhost:3000/user/login",
        data: payload
      })
    },

    register(context, payload) {
      return axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        data: payload
      })
    }
  },
  modules: {}
});