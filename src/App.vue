<template>
  <v-app>
    <Navbar /> <!-- Composant Navbar -->
    
    <router-view /> <!-- Affiche la vue active -->

    <Footer /> <!-- Composant Footer -->
    
    <!-- Ou un bouton pour naviguer vers Add Todo -->
    <button @click="goToAddView">Go to Add Todo</button>
   <!-- Bouton pour naviguer vers la page d'ajout de tâche -->
   <button @click="goToAddView">Go to Add Todo</button>
   </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar, Footer },
  name: 'App',
  methods: {
    // Méthode pour naviguer vers la page AddTodo
    goToAddView() {
      this.$router.push('/add'); // Navigue vers la page d'ajout de tâche
    }
  }
}
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
