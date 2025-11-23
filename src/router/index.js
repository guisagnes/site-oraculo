import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Oraculo from '../views/Oraculo.vue';
import Trabalhos from '../views/Trabalhos.vue';
import Consultoria from '../views/Consultoria.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/oraculo',
    name: 'Oraculo',
    component: Oraculo,
  },
  {
    path: '/trabalhos',
    name: 'Trabalhos',
    component: Trabalhos,
  },
  {
    path: '/consultoria',
    name: 'Consultoria',
    component: Consultoria,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
