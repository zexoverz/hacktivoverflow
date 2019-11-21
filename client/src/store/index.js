import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: null,
    questions: [],
    detailQuestion: {},
    upVoteStatus: false,
    downVoteStatus: false,
    totalQuestionVote: 0,
    nameLogin: null,

  },
  mutations: {
    SET_LOGIN(state) {
      if (localStorage.getItem("token")) {
        state.isLogin = localStorage.getItem("id");
        state.nameLogin = localStorage.getItem('username');
      } else {
        state.isLogin = null
      }
    },

    SET_QUESTIONS(state, payload) {
      state.questions = payload
    },

    SET_DETAIL_QUESTION(state, payload) {
      //Question Status

      state.detailQuestion = payload
      let question = state.detailQuestion;
      let id = localStorage.getItem("id");
      let isUp = false;
      let isDown = false;
      if (question.upVotes.includes(id)) {
        state.upVoteStatus = "active";
        state.downVoteStatus = false;
        isUp = true;
      }

      if (question.downVotes.includes(id)) {
        state.downVoteStatus = "active";
        state.upVoteStatus = false;
        isDown = true;
      }

      let up = question.upVotes.length;
      let down = question.downVotes.length;

      state.totalQuestionVote = up - down;

      if (isUp === false && isDown === false) {
        state.downVoteStatus = false;
        state.upVoteStatus = false;
      }


      //Answer Status


      let answerTemp = state.detailQuestion.answers;

      for (let i = 0; i < answerTemp.length; i++) {
        let isUpAnswer = false;
        let isDownAnswer = false;
        if (answerTemp[i].upVotes.includes(id)) {
          answerTemp[i].upVoteStatus = "active";
          answerTemp[i].downVoteStatus = false;
          isUpAnswer = true;
        }

        if (answerTemp[i].downVotes.includes(id)) {
          answerTemp[i].downVoteStatus = "active";
          answerTemp[i].upVoteStatus = false;
          isDownAnswer = true;
        }

        let up = answerTemp[i].upVotes.length;
        let down = answerTemp[i].downVotes.length;

        answerTemp[i].totalQuestionVote = up - down;

        if (isUpAnswer === false && isDownAnswer === false) {
          answerTemp[i].downVoteStatus = false;
          answerTemp[i].upVoteStatus = false;
        }
      }

      state.detailQuestion.answers = answerTemp;
    }
  },
  actions: {
    login(context, payload) {
      return axios({
        method: "post",
        url: "http://54.251.141.239/user/login",
        data: payload
      })
    },

    register(context, payload) {
      return axios({
        method: "post",
        url: "http://54.251.141.239/user/register",
        data: payload
      })
    },

    create(context, payload) {
      return axios({
        method: "post",
        url: "http://54.251.141.239/question",
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
        url: "http://54.251.141.239/question"
      }).then(response => {
        commit("SET_QUESTIONS", response.data)
      }).catch(err => {
        console.log(err);
      })
    },

    fetchDetailQuestion({
      commit
    }, payload) {
      axios({
        method: "get",
        url: `http://54.251.141.239/question/${payload}`
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
        url: `http://54.251.141.239/answer`,
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
    },

    questionUp(context, payload) {
      return axios({
        method: "patch",
        url: `http://54.251.141.239/question/upVote/${payload}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    questionDown(context, payload) {
      return axios({
        method: "patch",
        url: `http://54.251.141.239/question/downVote/${payload}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    answerUp(context, payload) {
      return axios({
        method: "patch",
        url: `http://54.251.141.239/answer/upVote/${payload}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    answerDown(context, payload) {
      return axios({
        method: "patch",
        url: `http://54.251.141.239/answer/downVote/${payload}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    deleteQuestion(context, payload) {
      return axios({
        method: "delete",
        url: `http://54.251.141.239/question/${payload}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },

    updateQuestion(context, payload) {
      return axios({
        method: "put",
        url: `http://54.251.141.239/question/${payload.id}`,
        data: {
          title: payload.title,
          description: payload.description
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
    },
    updateAnswer(context, payload) {
      return axios({
        method: "put",
        url: `http://54.251.141.239/answer/${payload.id}`,
        data: {
          description: payload.description
        },
        headers: {
          token: localStorage.getItem("token")
        }
      })
    }
  },
  modules: {}
});