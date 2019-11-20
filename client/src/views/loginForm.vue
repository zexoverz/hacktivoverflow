<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4 col-md-6 ml-auto mr-auto">
        <div class="card card-login">
          <form class="form" method action>
            <div class="card-header card-header-primary text-center">
              <h4 class="card-title">Login</h4>
              <div class="social-line">
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fa fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
            <p class="description text-center">Or Be Classical</p>
            <div class="card-body">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">mail</i>
                  </span>
                </div>
                <input type="email" class="form-control" v-model="email" placeholder="Email..." />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">lock_outline</i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Password..."
                />
              </div>
            </div>
            <div class="footer text-center">
              <a href="#" class="btn btn-primary btn-link btn-wd btn-lg" @click="loginEvent">Submit</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginEvent() {
      let obj = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("login", obj).then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.name);
        this.$store.commit("SET_LOGIN");
        this.$router.push("/");
        Swal.fire("Good job!", "Login Success", "success");
      });
    }
  }
};
</script>

<style>
</style>
