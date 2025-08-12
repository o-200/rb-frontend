import type { ProfileData, CurrentUserData } from "@/models/profile.model"

export class ProfileClient {
  static async get_user_profile(data: CurrentUserData): Promise<void> {
    const response = await fetch('http://0.0.0.0:3000/auth/current_user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${data.access_token}`
      }
    })

    if (response.ok) {
      const profile = await response.json()
      return profile
    } else {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || 'Get User failer')
    }
  }
}
