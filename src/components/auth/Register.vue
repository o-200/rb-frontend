<template>
  <div class="max-w-md mx-auto p-4 border rounded-2xl shadow">
    <h2 class="text-2xl font-bold mb-4">Register</h2>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-4">
        <label for="username" class="block mb-1">Username</label>
        <input
          id="username"
          v-model="form.username"
          type="text"
          required
          class="peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
        <p v-if="!form.username" class="text-red-500 text-sm mt-1">Username is required</p>
      </div>

      <div class="mb-4">
        <label for="email" class="block mb-1">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="peer w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500"
        />
        <p v-if="form.email && !isValidEmail(form.email)" class="text-red-500 text-sm mt-1">Invalid email address</p>
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
        <p v-if="form.password.length > 0 && form.password.length < 6" class="text-red-500 text-sm mt-1">
          Password must be at least 6 characters
        </p>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import { AuthService } from '@/services/auth.service'

const router = useRouter()
const form = reactive<RegisterForm>({
  username: '',
  email: '',
  password: ''
})

async function handleSubmit() {
  if (!form.username || !form.email || !form.password || !isValidEmail(form.email) || form.password.length < 6) {
    return
  }

  try {
    await AuthService.register(form)
    alert('Registration successful!')
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
    alert('Registration failed. Please try again.')
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
</script>
