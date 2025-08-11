import { defineStore } from 'pinia'
import { AuthService } from '@/services/auth.service'
import { router } from '@/router'

let inflight: Promise<boolean> | null = null;

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

    async autoLogin() {
      if (this.token) return true;

      const access = localStorage.getItem('access_token');
      if (access && access !== 'undefined') {
        this.token = access;
        AuthService.me(access).catch(() => { /* fall back to refresh later */ });
        return true;
      }

      if (!inflight) {
        inflight = (async () => {
          const refresh = localStorage.getItem('refresh_token');
          if (!refresh) return false;
          try {
            const tokens = await AuthService.refresh(refresh);
            this.login(tokens.access_token);
            return true;
          } catch {
            this.logout();
            return false;
          } finally {
            inflight = null;
          }
        })();
      }
      return inflight;
    },}
  }
)
