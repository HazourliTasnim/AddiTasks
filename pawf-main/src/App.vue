<template>
  <v-app>
      <Navbar/>

      <router-view />

      <Footer/>

  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue"
import Navbar from "./components/Navbar.vue"

export default {
  components: { Navbar, Footer },
  name: 'App',
};
</script>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

v-footer {
  margin-top: auto; 
}
</style>
