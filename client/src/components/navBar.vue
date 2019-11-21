<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">HacktivOverflow</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Features</a> -->
            <router-link to="/login" class="nav-link" v-if="!isLogin">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" v-if="!isLogin">Register</router-link>
          </li>
        </ul>
        <!-- <span href="#" v-if="isLogin">Logout</span> -->
        <img :src="'https://api.adorable.io/avatars/' + isLogin" height="40px" v-if="isLogin" />
        <h4 class="pl-3 mr-5" v-if="isLogin">{{nameLogin}}</h4>
        <a href="#" class="nav-link text-white mt-1" v-if="isLogin" @click="logoutEvent">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
import { mapState } from "vuex";
export default {
  computed: mapState(["isLogin", "nameLogin"]),
  methods: {
    logoutEvent() {
      Swal.fire({
        title: "Are you sure to logout ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then(result => {
        if (result.value) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("id");
          this.$store.commit("SET_LOGIN");
          Swal.fire("Good job!", "Logout Success", "success");
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style>
</style>