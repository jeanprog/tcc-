import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import SignIn from '../views/SignIn/SignIn.vue'
import Register from '../views/Register/Register.vue'
import Products from '../views/Products/RegisterProducts.vue'
import Cashier from '../views/Cashier/Cashier.vue'
import ListSales from '../views/Cashier/ListSales/ListSales.vue'
import Users from '../views/Users/Users.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: SignIn,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/home',
            component: Home,
        },

        {
            path: '/register-products',
            component: Products,
        },
        {
            path: '/cashier',
            component: Cashier,
        },
        {
            path: '/list-sales',
            component: ListSales,
        },

        {
            path: '/users',
            component: Users,
        },
    ],
})

export default router
