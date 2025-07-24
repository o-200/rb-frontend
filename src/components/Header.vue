<template>
  <header class="w-full bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / App name -->
        <h1 class="text-2xl font-bold text-blue-600">
          <RouterLink
            to="/"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
            exact
          >
            rb-frontend
          </RouterLink>
        </h1>

        <!-- Navigation Links -->
        <nav class="flex items-center space-x-6">
          <RouterLink
            v-if="!auth.isAuthenticated"
            to="/register"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
          >
            Register
          </RouterLink>

          <RouterLink
            v-if="!auth.isAuthenticated"
            to="/login"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
          >
            Login
          </RouterLink>

          <RouterLink
            v-if="auth.isAuthenticated"
            to="/dashboard"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
          >
            Dashboard
          </RouterLink>

          <button
            v-if="auth.isAuthenticated"
            @click="handleLogout"
            class="text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { AuthService } from '@/services/auth.service'

const auth = useAuthStore()
const router = useRouter()

async function handleLogout() {
  try {
    await AuthService.logout(auth.token)
    auth.logout()
    router.push('/')
  } catch (error) {
    console.error('Logout failed:', error)
    alert('LogOut failed. Please try again.')
  }
}
</script>
