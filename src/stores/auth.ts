import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('access_token') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    login(token: string) {
      this.token = token
      localStorage.setItem('access_token', token)
    },

    logout() {
      this.token = null
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('token_type')
    },

    autoLogin() {
      const token = localStorage.getItem('access_token')
      this.token = token
    }
  }
})
