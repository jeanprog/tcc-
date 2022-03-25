import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
    },
    
    {
      path: "/Cadastroprodutos",
      component: () => import("../views/Cadastroprodutos.vue"),
    },
    {
      path: "/Caixa",
      component: () => import("../views/Caixa.vue"),
    },
    {
      path: "/Vendas",
      component: () => import("../views/Vendas.vue"),
    },
    {
      path: "/Estoque",
      component: () => import("../views/Estoque.vue"),
    },
    {
      path: "/Usuarios",
      component: () => import("../views/Usuarios.vue"),
    },

  ],
});

export default router;