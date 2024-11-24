import { createRouter, createWebHashHistory } from 'vue-router';  // Importer Vue Router et le mode de navigation (hash)
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import AddView from '@/views/AddView.vue';  // Page pour ajouter une tâche
import TaskManager from '../components/TaskManager.vue';  // Composant TaskManager
import TaskList from '@/components/TaskList.vue'; // Composant TaskList

// Définition des routes pour l'application
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,  // Page d'accueil
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView, // Page "À propos"
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView, // Page "Contact"
  },
  {
    path: '/login',
    name: 'login',
    component: Login,  // Page de connexion
  },
  {
    path: '/register',
    name: 'register',
    component: Register, // Page d'inscription
  },
  {
    path: '/add', // Page pour ajouter une tâche
    name: 'add',
    component: AddView,  // Le composant de la page d'ajout
  },
  {
    path: '/tasks',   // Route pour afficher TaskList
    name: 'tasks',
    component: TaskList
  },
  {
    path: '/task-manager', // Route pour TaskManager
    name: 'task-manager',
    component: TaskManager, // Le composant TaskManager
  }
];

// Création de l'instance du routeur avec l'historique en mode hash
const router = createRouter({
  history: createWebHashHistory(),  // Mode de navigation avec hash (préféré pour les applications SPAs)
  routes,  // Routes définies ci-dessus
});

export default router;  // Exporte le routeur configuré
