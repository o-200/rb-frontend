<template>
  <div class="max-w-md mx-auto p-4 border rounded-2xl shadow">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-4">
        <label for="username" class="block mb-1">username</label>
        <input
          id="username"
          v-model="form.username"
          type="username"
          required
          class="peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-1">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          minlength="6"
          class="peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { AuthService } from '@/services/auth.service'

const router = useRouter()
const form = reactive({
  username: '',
  password: ''
})

async function handleSubmit() {
  if (!form.username || !form.password) {
    return
  }

  try {
    await AuthService.login(form)
    alert('Login successful!')
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed. Please check your credentials and try again.')
  }
}
</script>
