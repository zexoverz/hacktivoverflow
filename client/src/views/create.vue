<template>
  <div class="container text-left">
    <form>
      <div class="form-group col-md-8">
        <h3>Title</h3>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="title"
          placeholder="Enter Title"
        />
      </div>

      <div class="form-group col-md-8">
        <h3>Description</h3>
        <div class="wysiwyg">
          <wysiwyg v-model="myHTML" style="height: 300px; border-color: black;" />
        </div>

        <button class="btn btn-success mt-4" @click="createEvent">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      myHTML: "",
      title: ""
    };
  },
  methods: {
    createEvent() {
      let obj = {
        title: this.title,
        description: this.myHTML
      };

      this.$store.dispatch("create", obj).then(() => {
        this.$router.push("/");
        Swal.fire("Good job!", "Login Success", "success");
      });
    }
  }
};
</script>

<style>
</style>