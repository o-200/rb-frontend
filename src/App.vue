<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    <Header />
    <main class="flex-grow p-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>
