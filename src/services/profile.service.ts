import { ProfileClient } from "./clients/profile.client"
import type { CurrentUserData } from "@/models/profile.model"

export class ProfileService {
  static async register(data: CurrentUserData): Promise<void> {
    const profile = await ProfileClient.get_user_profile(data)
    return profile
  }
}
