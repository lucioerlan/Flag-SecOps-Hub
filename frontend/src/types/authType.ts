export type RequestAuthLogin = {
  email: string
  password: string
}

export type RequestAuthRegister = {
  name: string
  email: string
  password: string
}

export type RequestAuthRefreshToken = {
  accessToken: string
}
