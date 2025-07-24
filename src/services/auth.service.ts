import { AuthClient } from '@/services/clients/auth.client'
import { useAuthStore } from '@/stores/auth'
import type { RegistrationData, LoginData, TokenData, LogOutData } from '@/models/auth.model'

export class AuthService {
  static async register(data: RegistrationData): Promise<void> {
    const tokens = await AuthClient.registration(data)
    this.authenticate(tokens)
    return tokens
  }

  static async login(data: LoginData): Promise<void> {
    const tokens = await AuthClient.login(data)
    this.authenticate(tokens)
    return tokens
  }

  static async logout(data: LogOutData): Promise<void> {
    await AuthClient.logout(data)
    const auth = useAuthStore()
    auth.logout()
  }

  private static authenticate(tokens: TokenData) {
    this.storeTokens(tokens)

    const auth = useAuthStore()
    auth.login(tokens.access_token)
  }

  private static storeTokens(tokens: TokenData) {
    localStorage.setItem('access_token', tokens.access_token)
    localStorage.setItem('refresh_token', tokens.refresh_token)
    localStorage.setItem('token_type', tokens.token_type)
  }
}
