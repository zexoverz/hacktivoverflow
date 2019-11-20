import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( /* webpackChunkName: "login" */ "../views/loginForm.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import( /* webpackChunkName: "register" */ "../views/registerForm.vue")
  },
  {
    path: "/question",
    name: "question",
    component: () =>
      import( /* webpackChunkName: "question" */ "../views/question.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () =>
      import( /* webpackChunkName: "create" */ "../views/create.vue"),
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;