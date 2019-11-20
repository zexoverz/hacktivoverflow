import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-wysiwyg/dist/vueWysiwyg.css";

import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
  maxHeight: "500px"
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");