import type { RegistrationData, LoginData, LogOutData } from '@/models/auth.models'

export class AuthClient {
  static async registration(data: RegistrationData): Promise<void> {
    const response = await fetch('http://0.0.0.0:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const tokens = await response.json()
      return tokens
    } else {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Registration failed')
    }
  }

  static async login(data: LoginData): Promise<void> {
    const response = await fetch('http://0.0.0.0:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      const tokens = await response.json()
      return tokens
    } else {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Registration failed')
    }
  }

  static async logout(data: LogOutData): Promise<void> {
    await fetch('http://0.0.0.0:3000/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${data}`
      }
    })
  }
}
