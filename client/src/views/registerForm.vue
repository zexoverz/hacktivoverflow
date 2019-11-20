<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4 col-md-6 ml-auto mr-auto">
        <div class="card card-login">
          <form class="form" method action>
            <div class="card-header card-header-success text-center">
              <h4 class="card-title">Register</h4>
              <div class="social-line">
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-just-icon btn-link">
                  <i class="fab fa-google-plus"></i>
                </a>
              </div>
            </div>
            <p class="description text-center">Or Be Classical</p>
            <div class="card-body">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-user-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  v-model="nameRegister"
                  placeholder="Name..."
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="email"
                  class="form-control"
                  v-model="emailRegister"
                  placeholder="Email..."
                />
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  class="form-control"
                  v-model="passRegister"
                  placeholder="Password..."
                />
              </div>
            </div>
            <div class="footer text-center">
              <a
                href="#"
                class="btn btn-success btn-link btn-wd btn-lg text-white"
                @click="registerEvent"
              >Get Started</a>
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
  name: "register",
  data() {
    return {
      nameRegister: "",
      emailRegister: "",
      passRegister: ""
    };
  },
  methods: {
    registerEvent() {
      let obj = {
        name: this.nameRegister,
        email: this.emailRegister,
        password: this.passRegister
      };

      this.$store.dispatch("register", obj).then(() => {
        this.$router.push("/login");
        Swal.fire("Good job!", "Register Success", "success");
      });
    }
  }
};
</script>

<style>
</style>


