export interface RegistrationData {
  username: string
  email: string
  password: string
}

export interface LoginData {
  username: string
  password: string
}


export interface LogOutData {
  access_token: string
}

export interface TokenData {
  access_token: string
  refresh_token: string
  token_type: string
}