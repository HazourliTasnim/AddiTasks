<template>
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }} - {{ task.category }} - {{ task.priority }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [],
      };
    },
    mounted() {
      // Envoi d'une requête GET vers l'API pour récupérer les tâches
      fetch('http://localhost:3005/api/tasks')
        .then(response => response.json())
        .then(data => {
          this.tasks = data;  // Met à jour les tâches dans le composant
        })
        .catch(error => console.error('Erreur lors de la récupération des tâches:', error));
    },
  };
  </script>
  