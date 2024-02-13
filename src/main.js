// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LoginPage from './page/loginPage.vue'; // Tambahkan impor komponen Login

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/loginPage.vue',
      name: "Login",
      component: LoginPage // Gunakan komponen Login yang sudah diimpor
    }
  ]
});

const app = createApp(App);

// Pasang router ke aplikasi
app.use(router);

// Kemudian pasang aplikasi ke elemen HTML
app.mount('#app');

