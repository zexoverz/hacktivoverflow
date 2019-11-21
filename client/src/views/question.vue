<template>
  <div class="container mx-5 text-left">
    <div class="answerList" style="margin: 0px 200px;">
      <question-detail></question-detail>
      <hr />
      <h3>{{detailQuestion.answers.length}} Answers</h3>

      <answerItem
        class="mt-5"
        v-for="answer in detailQuestion.answers"
        :key="answer._id"
        :answer="answer"
      ></answerItem>

      <hr />
      <div class="yourAnswer mb-5">
        <h2>Your Answer</h2>

        <div class="wysiwyg mt-3">
          <wysiwyg v-model="myHTML" />
        </div>
        <button class="btn btn-success mt-4" @click="answerEvent(detailQuestion._id)">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import questionDetail from "../components/questionDetail";
import answerItem from "../components/answer";
import { mapState } from "vuex";
export default {
  data() {
    return {
      myHTML: ""
    };
  },
  computed: {
    ...mapState(["isLogin", "detailQuestion"])
  },
  methods: {
    answerEvent(id) {
      if (!this.isLogin) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      } else {
        let obj = {
          description: this.myHTML,
          questionId: id,
          author: localStorage.getItem("username")
        };
        this.$store.dispatch("createAnswer", obj);
        this.myHTML = "";
        Swal.fire("Good job!", "Answer Success", "success");
      }
    }
  },
  components: {
    questionDetail,
    answerItem
  }
};
</script>

<style scoped>
i:hover {
  color: orange;
}

#active {
  color: orange;
}

span {
  cursor: pointer;
}
</style>