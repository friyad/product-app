<script lang="ts">
import Header from "./components/Header.vue";
// import './assets/main.css'
// load the use from localstorage
import store from "@/store";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
/* @import url(./assets/main.css); */
</style>
