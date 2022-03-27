import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/SignIn/SignIn.vue"),
    },
    {
      path: "/Register",
      component: () => import("../views/Register/Register.vue"),
    },
    {
      path: "/Home",
      component: () => import("../views/Home/Home.vue"),
    },
    
    {
      path: "/RegisterProducts",
      component: () => import("../views/Products/RegisterProducts.vue"),
    },
    {
      path: "/Cashier",
      component: () => import("../views/Cashier/Cashier.vue"),
    },
    {
      path: "/ListSales",
      component: () => import("../views/Cashier/ListSales/ListSales.vue"),
    },
   
    {
      path: "/Users",
      component: () => import("../views/Users/Users.vue"),
    },

  ],
});

export default router;