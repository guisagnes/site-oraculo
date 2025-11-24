import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Oraculo from "../views/Oraculo.vue";
import Trabalhos from "../views/Trabalhos.vue";
import Mentoria from "../views/Mentoria.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/oraculo",
    name: "Oraculo",
    component: Oraculo,
  },
  {
    path: "/feitiços",
    name: "Feitiços",
    component: Trabalhos,
  },
  {
    path: "/mentoria",
    name: "Mentoria",
    component: Mentoria,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
