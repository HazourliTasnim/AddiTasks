import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Utilise le routeur déjà configuré dans './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import './main.css'
loadFonts(); // Si ce fichier charge des polices externes

createApp(App)
  .use(router) // Utilisation du routeur importé
  .use(vuetify) // Utilisation de Vuetify
  .mount('#app');
