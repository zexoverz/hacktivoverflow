<template>
  <div>
    <h2 class="mt-5 text-center">{{detailQuestion.title}}</h2>
    <div class="row">
      <img :src="'https://api.adorable.io/avatars/' + detailQuestion.userId._id" height="65px" />
      <h3 class="pl-3">{{detailQuestion.userId.name}}</h3>
    </div>
    <div class="d-flex mt-4">
      <div class="col-md-1">
        <span>
          <i
            class="fas fa-arrow-circle-up"
            @click="questionUp(detailQuestion._id)"
            style="font-size: 30px"
            :id="upVoteStatus"
          ></i>
        </span>
        <h3 class="ml-2 pb-2">{{totalQuestionVote}}</h3>
        <span>
          <i
            class="fas fa-arrow-circle-down"
            @click="questionDown(detailQuestion._id)"
            style="font-size: 30px"
            :id="downVoteStatus"
          ></i>
        </span>
      </div>

      <div class="col-md-11">
        <p v-html="detailQuestion.description"></p>
      </div>
    </div>
    <button
      class="btn btn-danger mt-3"
      v-if="detailQuestion.userId._id === isLogin"
      @click="deleteQuestion(detailQuestion._id)"
    >Delete Question</button>
    <button
      class="btn btn-primary ml-4 mt-3"
      v-if="detailQuestion.userId._id === isLogin"
      data-toggle="modal"
      data-target="#editModal"
    >Update Question</button>

    <div
      class="modal fade bd-example-modal-lg"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="mx-4">
            <h3>title</h3>
            <input
              type="text"
              class="form-control"
              id="exampleInputTitle"
              v-model="titleEdit"
              placeholder="Enter Title"
            />
            <div class="wysiwyg mt-3">
              <wysiwyg v-model="editDescription" />
            </div>

            <button
              class="btn btn-success mt-4 mb-5"
              @click="updateEvent(detailQuestion._id)"
            >Submit</button>
            <button class="btn btn-light mt-4 ml-3 mb-5" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      editDescription: "",
      titleEdit: ""
    };
  },
  computed: mapState([
    "isLogin",
    "detailQuestion",
    "upVoteStatus",
    "downVoteStatus",
    "totalQuestionVote"
  ]),
  methods: {
    questionUp(id) {
      if (!this.isLogin) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first !!"
        });
      } else {
        if (this.detailQuestion.userId._id === localStorage.getItem("id")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't vote your question"
          });
        } else {
          this.$store.dispatch("questionUp", id).then(() => {
            this.$store.dispatch("fetchDetailQuestion", id);
          });
        }
      }
    },

    questionDown(id) {
      if (!this.isLogin) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first !!"
        });
      } else {
        if (this.detailQuestion.userId._id === localStorage.getItem("id")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't vote your question"
          });
        } else {
          this.$store.dispatch("questionDown", id).then(() => {
            this.$store.dispatch("fetchDetailQuestion", id);
          });
        }
      }
    },
    deleteQuestion(id) {
      Swal.fire({
        title: "Are you sure to delete this question ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      })
        .then(result => {
          if (result.value) {
            this.$store.dispatch("deleteQuestion", id);
          }
        })
        .then(() => {
          Swal.fire("Good job!", "Delete Success", "success");
          this.$router.push("/");
        });
    },

    updateEvent(id) {
      let obj = {
        title: this.titleEdit,
        description: this.editDescription,
        id: id
      };

      this.$store.dispatch("updateQuestion", obj).then(() => {
        this.editDescription = "";
        this.$store.dispatch("fetchDetailQuestion", id);
        Swal.fire("Good job!", "Update Success", "success");
      });
    }
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