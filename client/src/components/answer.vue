<template>
  <div>
    <div class="row">
      <img :src="'https://api.adorable.io/avatars/' + answer.userId" height="65px" />
      <h3 class="pl-3">{{answer.author}}</h3>
      <button
        class="btn btn-primary"
        style="margin-left: 400px;"
        data-toggle="modal"
        :data-target="'#edit' + answer._id"
      >Edit Answer</button>
    </div>

    <div
      class="modal fade bd-example-modal-lg"
      :id="'edit' + answer._id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="mx-4">
            <h3>Update Answer</h3>

            <div class="wysiwyg mt-3">
              <wysiwyg v-model="editAnswer" />
            </div>

            <button class="btn btn-success mt-4 mb-5" @click="updateAnswer(answer._id)">Submit</button>
            <button class="btn btn-light mt-4 ml-3 mb-5" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex mt-4">
      <div class="col-md-1">
        <span>
          <i
            :id="answer.upVoteStatus"
            class="fas fa-arrow-circle-up"
            @click="answerUp(answer)"
            style="font-size: 30px;"
          ></i>
        </span>
        <h3 class="ml-2 pb-2">{{answer.totalQuestionVote}}</h3>
        <span>
          <i
            :id="answer.downVoteStatus"
            class="fas fa-arrow-circle-down"
            @click="answerDown(answer)"
            style="font-size: 30px"
          ></i>
        </span>
      </div>

      <div class="col-md-11">
        <p v-html="answer.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapState } from "vuex";
export default {
  computed: mapState(["isLogin", "detailQuestion"]),
  methods: {
    answerUp(answer) {
      if (!this.isLogin) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first !!"
        });
      } else {
        if (answer.userId === localStorage.getItem("id")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't vote your answer"
          });
        } else {
          this.$store.dispatch("answerUp", answer._id).then(() => {
            this.$store.dispatch(
              "fetchDetailQuestion",
              this.detailQuestion._id
            );
          });
        }
      }
    },

    answerDown(answer) {
      if (!this.isLogin) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first !!"
        });
      } else {
        if (answer.userId === localStorage.getItem("id")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't vote your answer"
          });
        } else {
          this.$store.dispatch("answerDown", answer._id).then(() => {
            this.$store.dispatch(
              "fetchDetailQuestion",
              this.detailQuestion._id
            );
          });
        }
      }
    },

    updateAnswer(id) {
      let obj = {
        description: this.editAnswer,
        id: id
      };

      this.$store.dispatch("updateAnswer", obj).then(() => {
        this.editAnswer = "";
        this.$store.dispatch("fetchDetailQuestion", this.detailQuestion._id);
        Swal.fire("Good job!", "Update Success", "success");
      });
    }
  },
  props: ["answer"]
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