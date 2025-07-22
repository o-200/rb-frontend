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
            to="/register"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
          >
            register
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            active-class="text-blue-700"
          >
            About
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// nothing here yet
</script>
