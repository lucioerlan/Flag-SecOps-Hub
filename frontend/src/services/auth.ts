import api from '@/factories/api'
import { AuthUser } from '@/types/auth'

const authUser = async ({ email, password }: AuthUser) => {
  try {
    const { data } = await api.post('auth/login', { email, password })

    return data
  } catch (error) {
    return error
  }
}

const refreshToken = async ({ access_token }: { access_token: string }) => {
  try {
    const { data } = await api.post('users/auth/refresh', { access_token })

    return data
  } catch (error) {
    return error
  }
}

export { authUser, refreshToken }
