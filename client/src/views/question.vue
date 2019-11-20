<template>
  <div class="container mx-5 text-left">
    <h1 class="mt-5 text-center">{{detailQuestion.title}}</h1>
    <div class="d-flex mt-4">
      <div class="col-md-1">
        <i class="fas fa-arrow-circle-up" style="font-size: 60px"></i>
        <h1 class="ml-2 pl-2">0</h1>
        <i class="fas fa-arrow-circle-down" style="font-size: 60px"></i>
      </div>

      <div class="col-md-11">
        <p v-html="detailQuestion.description"></p>
      </div>
    </div>
    <hr />

    <div class="answerList" style="margin: 0px 200px;">
      <div class="mt-5" v-for="answer in detailQuestion.answers" :key="answer._id">
        <div class="row">
          <img :src="'https://api.adorable.io/avatars/' + answer._id" height="65px" />
          <h3 class="pl-3">{{answer.author}}</h3>
        </div>
        <div class="d-flex mt-4">
          <div class="col-md-1">
            <i class="fas fa-arrow-circle-up" style="font-size: 30px"></i>
            <h3 class="ml-2 pb-2">0</h3>
            <i class="fas fa-arrow-circle-down" style="font-size: 30px"></i>
          </div>

          <div class="col-md-11">
            <p v-html="answer.description"></p>
          </div>
        </div>
      </div>

      <hr />
      <div class="yourAnswer mb-5">
        <h2>Your Answer</h2>

        <h3>Author</h3>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="author"
          placeholder="Enter Author"
        />

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
import { mapState } from "vuex";
export default {
  data() {
    return {
      myHTML: "",
      author: ""
    };
  },
  computed: mapState(["isLogin", "detailQuestion"]),
  methods: {
    answerEvent(id) {
      let obj = {
        description: this.myHTML,
        questionId: id,
        author: this.author
      };
      this.$store.dispatch("createAnswer", obj);
      Swal.fire("Good job!", "Answer Success", "success");
    }
  }
};
</script>

<style scoped>
</style>