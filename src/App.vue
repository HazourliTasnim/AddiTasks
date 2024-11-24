<template>
  <v-app>
    <!-- Barre de navigation -->
    <v-app-bar flat max-height="65">
      <navbar />
    </v-app-bar>

    
   

    <!-- Ou un bouton pour naviguer vers Add Todo -->
    <button @click="goToAddView">Go to Add Todo</button>

    <!-- Zone pour afficher le contenu des vues -->
    <router-view></router-view>

    <!-- Pied de page -->
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
// Importation des composants
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import TaskManager from './components/TaskManager.vue';
import TaskList from './components/TaskList.vue'; // Importation du composant TaskList

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    TaskManager, // Ajouter le composant TaskManager
    TaskList     // Ajouter le composant TaskList
  },
  methods: {
    // Méthode pour naviguer vers la page AddTodo
    goToAddView() {
      this.$router.push('/add');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
