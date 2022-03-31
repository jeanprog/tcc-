import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home/Home.vue'
import SignIn from  '../views/SignIn'
import Register from '../views/Register/'
import Products from '../views/Products/RegisterProducts'
import Cashier from '../views/Cashier/Cashier'
import ListSales from '../views/Cashier/ListSales/ListSales'
import Users from '../views/Users'

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
