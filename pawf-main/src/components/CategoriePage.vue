<template>
    <div class="categories-container">
      <!-- Première ligne de catégories (3 catégories en haut) -->
      <div class="categories-row">
        <!-- Catégorie Travail -->
        <div :class="['category-box', 'travail']">
          <h3>Travail</h3>
          <div v-if="tasks.travail.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.travail" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'travail']" @click="addTask('travail')">Ajouter une tâche</button>
        </div>
  
        <!-- Catégorie Personnel -->
        <div :class="['category-box', 'personnel']">
          <h3>Personnel</h3>
          <div v-if="tasks.personnel.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.personnel" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'personnel']" @click="addTask('personnel')">Ajouter une tâche</button>
        </div>
  
        <!-- Catégorie Etude -->
        <div :class="['category-box', 'etude']">
          <h3>Etude</h3>
          <div v-if="tasks.etude.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.etude" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'etude']" @click="addTask('etude')">Ajouter une tâche</button>
        </div>
      </div>
  
      <!-- Deuxième ligne de catégories (3 catégories en bas) -->
      <div class="categories-row">
        <!-- Catégorie Maison -->
        <div :class="['category-box', 'maison']">
          <h3>Maison</h3>
          <div v-if="tasks.maisons.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.maisons" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'maison']" @click="addTask('maisons')">Ajouter une tâche</button>
        </div>
  
        <!-- Catégorie Autre -->
        <div :class="['category-box', 'autre']">
          <h3>Autre</h3>
          <div v-if="tasks.autre.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.autre" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'autre']" @click="addTask('autre')">Ajouter une tâche</button>
        </div>
  
        <!-- Catégorie Loisirs -->
        <div :class="['category-box', 'loisirs']">
          <h3>Loisirs</h3>
          <div v-if="tasks.loisirs.length === 0">Vous n'avez pas de tâche!</div>
          <div v-else>
            <ul>
              <li v-for="task in tasks.loisirs" :key="task.id">{{ task.name }}</li>
            </ul>
          </div>
          <button :class="['button', 'loisirs']" @click="addTask('loisirs')">Ajouter une tâche</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Pour effectuer des requêtes HTTP
  
  export default {
    data() {
      return {
        tasks: {
          travail: [],
          personnel: [],
          etude: [],
          maisons: [],
          autre: [],
          loisirs: []
        }
      };
    },
    mounted() {
      this.loadTasks(); // Charger les tâches au chargement du composant
    },
    methods: {
      // Charger les tâches depuis l'API (connexion à la base de données)
      async loadTasks() {
        try {
          // Requête pour récupérer les tâches par catégorie
          const response = await axios.get('http://localhost:3000/api/tasks'); // Exemple d'API
          this.tasks = response.data;
        } catch (error) {
          console.error("Erreur lors du chargement des tâches :", error);
        }
      },
  
      // Ajouter une tâche dans la catégorie spécifiée
      async addTask(category) {
        const taskName = prompt('Entrez le nom de la tâche:');
        if (taskName) {
          try {
            // Requête pour ajouter la tâche dans la base de données
            await axios.post('http://localhost:3000/api/tasks', {
              category: category,
              name: taskName
            });
            // Recharger les tâches après ajout
            this.loadTasks();
          } catch (error) {
            console.error("Erreur lors de l'ajout de la tâche :", error);
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .categories-container {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .categories-row {
    display: flex;
    justify-content: space-between;
  }
  
  .category-box {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    flex: 1; /* Chaque boîte prendra une taille égale */
    margin: 10px;
    transition: transform 0.2s;
    max-height: 350px; /* Limite la hauteur de la catégorie */
    overflow-y: auto; /* Ajoute une scrollbar verticale si le contenu dépasse la hauteur */
  }
  
  /* Personnalisation des barres de défilement */
  .category-box::-webkit-scrollbar {
    width: 8px;
  }
  
  .category-box::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  
  .category-box::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .category-box:hover {
    transform: scale(1.05);
  }
  
  .category-box h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  /* Style spécifique pour chaque catégorie */
  .category-box.travail {
    background-color: #cb6ce6; /* Rouge pour Travail */
  }
  
  .category-box.personnel {
    background-color: #b28cc5; /* Vert pour Personnel */
  }
  
  .category-box.etude {
    background-color: #845d8f; /* Bleu pour Etude */
  }
  
  .category-box.maison {
    background-color: #d89ed8; /* Jaune pour Maison */
  }
  
  .category-box.autre {
    background-color: #894e97; /* Violet pour Autre */
  }
  
  .category-box.loisirs {
    background-color: #c56ab3; /* Orange pour Loisirs */
  }
  
  .category-box ul {
    list-style-type: none;
    padding: 0;
  }
  
  .category-box ul li {
    margin: 5px 0;
    color: #bd9494;
  }
  
  /* Style spécifique pour les boutons, en fonction des catégories */
  .button {
    margin-top: 10px;
    padding: 8px 16px;
    color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button.travail {
    background-color: #62356d70; /* Rouge pour Travail */
  }
  
  .button.personnel {
    background-color: #62356d70; /* Vert pour Personnel */
  }
  
  .button.etude {
    background-color: #62356d70; /* Bleu pour Etude */
  }
  
  .button.maison {
    background-color: #62356d70; /* Jaune pour Maison */
  }
  
  .button.autre {
    background-color: #b37ac9; /* Violet pour Autre */
  }
  
  .button.loisirs {
    background-color: #b37ac9; /* Orange pour Loisirs */
  }
  
  .button:hover {
    background-color: #b06bb0;
    color: #333;
  }
  </style>
  