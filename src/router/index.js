import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DemoA from '../views/DemoA.vue'
import DemoB from '../views/DemoB.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/report',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
    },
    {
        path: '/demo-a',
        name: 'DemoA',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo-a" */ '../views/DemoA.vue')
    },
    {
        path: '/demo-b',
        name: 'DemoB',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo-b" */ '../views/DemoB.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
