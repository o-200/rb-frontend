<template>
  <div class="max-w-md mx-auto p-4 border rounded-2xl shadow">
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

    <div v-if="profile">
      <p><strong>Username:</strong> {{ profile.username }}</p>
      <p><strong>Email:</strong> {{ profile.email }}</p>
    </div>

    <div v-else>
      Loading profile...
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { ProfileService } from "@/services/profile.service"
import { useAuthStore } from '@/stores/auth'

import type { ProfileData, CurrentUserData } from "@/models/profile.model"

const auth = useAuthStore()
const profile = ref<ProfileData | null>(null)

onMounted(async () => {
  const currentUser: CurrentUserData = {
    access_token: auth.token
  }
  profile.value = await ProfileService.register(currentUser)
})
</script>
