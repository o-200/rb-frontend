import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
