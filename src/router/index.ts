import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
  scrollBehavior() {
    return { top: 0 }
  },
})

function sanitizeRedirect(path?: string | null) {
  if (!path) return null
  if (path.startsWith('/') && !path.startsWith('//')) return path
  return null
}

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  const ok = await auth.autoLogin() // NOT navigate on its own

  // if route isnt auth -> go login
  if (to.meta.requiresAuth && !ok) {
    const redirect = sanitizeRedirect(to.fullPath)
    return {
      name: 'Login',
      query: redirect ? { redirect } : undefined,
      replace: true,
    }
  }

  // prevent logged-in users from seeing login/register
  if (to.meta.guestOnly && ok) {
    const target = sanitizeRedirect((to.query.redirect as string) || '/')
    return { path: target || '/', replace: true }
  }

  return true
})

