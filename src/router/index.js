import { createRouter, createWebHistory } from 'vue-router'
import listProducts from '../views/Products/listproducts/ListProducts.vue'
import template from '../components/template.vue'
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
            path: '/template',
            component: template,
        },

        {
            path: '/register-products',
            component: Products,
        },
        {
            path: '/list-products',
            component: listProducts,
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
