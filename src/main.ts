import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.css'
import { router } from './router'
import { pinia } from './stores'

import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
app.use(router)
app.use(pinia)

const authStore = useAuthStore()
authStore.autoLogin()

app.mount('#app')
