<template>
  <div class="home mx-3">
    <div class="row d-flex justify-content-between">
      <div class="col-md-6">
        <h1 class="pr-5">Question List</h1>
      </div>
      <div class="col-md-6 pt-3">
        <button class="btn btn-success mt-4" v-if="isLogin" @click="createEvent">create question</button>
      </div>
    </div>
    <div class="container text-left mt-5" v-for="question in questions" :key="question._id">
      <div class="card card-nav-tabs">
        <div class="card-header card-header-success" id="headerCard">Featured</div>
        <div class="card-body">
          <h4 class="card-title">{{question.title}}</h4>
          <p class="card-text">{{question.description.slice(0,60) + '...'}}</p>
          <button class="btn btn-success" @click="detailEvent(question._id)">Go to Question</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "home",
  computed: mapState(["isLogin", "questions"]),
  methods: {
    createEvent() {
      this.$router.push("/create");
    },
    detailEvent(id) {
      this.$store.dispatch("fetchDetailQuestion", id);
      this.$router.push("/question");
    }
  },
  created() {
    this.$store.dispatch("fetchQuestion");
  }
};
</script>

<style scoped>
#headerCard {
  background-color: #212121 !important;
}
</style>
