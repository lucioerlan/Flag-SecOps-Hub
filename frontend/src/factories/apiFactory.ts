import { refreshToken } from '@/services/authService'
import { restoreSettings, storeSettings } from '@/utils'
import axios, { AxiosRequestHeaders } from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use((config) => {
  const settings = restoreSettings()

  if (settings && settings.accessToken) {
    config.headers = {
      Authorization: `Bearer ${settings.accessToken}`
    } as AxiosRequestHeaders
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { status, data, config } = error.response

    if (status === 401 && data.error === 'Token expired' && !config._retry) {
      config._retry = true
      const settings = await restoreSettings()

      try {
        const newAccessToken = await refreshToken(settings.refreshToken)

        if (newAccessToken) {
          storeSettings({ ...settings, accessToken: newAccessToken })
          config.headers.Authorization = `Bearer ${newAccessToken}`
          return api(config)
        }
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default api
