import api from '@/factories/api'
import { RequestAuthLogin, RequestAuthRegister, RequestAuthRefreshToken } from '@/types/auth'

const authLogin = async ({ email, password }: RequestAuthLogin) => {
  try {
    const { data } = await api.post('auth/login', { email, password })

    return data
  } catch (error) {
    return error
  }
}

const authRegister = async ({ name, email, password }: RequestAuthRegister) => {
  try {
    const { data } = await api.post('auth/register', { name, email, password })
    return data
  } catch (error) {
    return error
  }
}

const refreshToken = async ({ accessToken }: RequestAuthRefreshToken) => {
  try {
    const { data } = await api.post('auth/refresh', { accessToken })
    return data
  } catch (error) {
    return error
  }
}

export { authLogin, authRegister, refreshToken }
