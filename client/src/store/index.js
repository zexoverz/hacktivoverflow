import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    questions: [],
    detailQuestion: {}
  },
  mutations: {
    SET_LOGIN(state) {
      if (localStorage.getItem("token")) {
        state.isLogin = localStorage.getItem("token");
      } else {
        state.isLogin = null
      }
    },

    SET_QUESTIONS(state, payload) {
      state.questions = payload
    },

    SET_DETAIL_QUESTION(state, payload) {
      state.detailQuestion = payload
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
    },

    create(context, payload) {
      return axios({
        method: "post",
        url: "http://localhost:3000/question",
        data: payload,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    fetchQuestion({
      commit
    }) {
      axios({
        method: "get",
        url: "http://localhost:3000/question"
      }).then(response => {
        commit("SET_QUESTIONS", response.data)
      }).catch(err => {
        console.log(err);
      })
    },

    fetchDetailQuestion({
      commit
    }, payload) {
      console.log(payload);
      axios({
        method: "get",
        url: `http://localhost:3000/question/${payload}`
      }).then(response => {
        commit("SET_DETAIL_QUESTION", response.data);
      }).catch(err => {
        console.log(err);
      })
    },

    createAnswer(context, payload) {
      let id = payload.questionId;
      axios({
        method: "post",
        url: `http://localhost:3000/answer`,
        data: {
          description: payload.description,
          questionId: payload.questionId,
          author: payload.author
        },
        headers: {
          token: localStorage.getItem("token")
        }
      }).then(() => {
        context.dispatch("fetchDetailQuestion", id)
      }).catch(err => {
        console.log(err);
      })
    }
  },
  modules: {}
});