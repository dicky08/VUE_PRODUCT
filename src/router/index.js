import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Registrasi from '../views/Register.vue'
import Product from '../views/Product.vue'
import History from '../views/History.vue'
import store from '../store/'
// import { from } from 'core-js/fn/array'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Registrasi',
    component: Registrasi
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      requiresAuth: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
