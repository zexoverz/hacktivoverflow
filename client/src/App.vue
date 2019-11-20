<template>
  <div id="app">
    <navBar></navBar>
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/navBar";

export default {
  components: {
    navBar
  },
  created() {
    this.$store.commit("SET_LOGIN");
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
