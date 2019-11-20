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
        <span class="btn btn-danger" v-if="isLogin">Logout</span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["isLogin"])
};
</script>

<style>
</style>