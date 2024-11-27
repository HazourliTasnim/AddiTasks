import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import TodoCalendar from '../views/TodoCalendar.vue';
import AddView from '@/views/AddView.vue';  // Page pour ajouter une tâche

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/todo-calendar',
    name: 'TodoCalendar',
    component: TodoCalendar,
  },
  {
    path: '/add', // Page pour ajouter une tâche
    name: 'add-view',
    component: AddView,  // Le composant de la page d'ajout
    props: route => ({ date: route.query.date }),  
  },
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
