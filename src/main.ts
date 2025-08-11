import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import { router } from './router'
import { pinia } from './stores'
import { useAuthStore } from '@/stores/auth'

async function bootstrap() {
  const app = createApp(App)
  app.use(pinia)
  app.use(router)

  const auth = useAuthStore()
  await auth.autoLogin()
  await router.isReady()

  app.mount('#app')
}

bootstrap()
