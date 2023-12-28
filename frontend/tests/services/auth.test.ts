import api from '@/factories/apiFactory'
import * as services from '@/services/authService'

describe('authLogin', () => {
  const mockUser = { email: 'user@test.com.br', password: 'password' }

  it('should return data on successful login', async () => {
    const mockData = { token: 'fakeToken' }
    jest.spyOn(api, 'post').mockResolvedValueOnce({ data: mockData })

    const result = await services.authLogin(mockUser)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed login', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'post').mockRejectedValueOnce(mockError)

    const result = await services.authLogin(mockUser)
    expect(result).toEqual(mockError)
  })
})

describe('authRegister', () => {
  const mockUser = { name: 'User', email: 'user@example.com', password: 'password' }

  it('should return data on successful registration', async () => {
    const mockData = { user: 'User Data' }
    jest.spyOn(api, 'post').mockResolvedValueOnce({ data: mockData })

    const result = await services.authRegister(mockUser)
    expect(result).toEqual(mockData)
  })

  it('should return error on failed registration', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'post').mockRejectedValueOnce(mockError)

    const result = await services.authRegister(mockUser)
    expect(result).toEqual(mockError)
  })
})

describe('refreshToken', () => {
  const accessToken = 'validToken'

  it('should return data on successful token refresh', async () => {
    const mockData = { accessToken: 'newAccessToken' }
    jest.spyOn(api, 'post').mockResolvedValueOnce({ data: mockData })

    const result = await services.refreshToken({ accessToken })
    expect(result).toEqual(mockData)
  })

  it('should return error on failed token refresh', async () => {
    const mockError = new Error('failed')
    jest.spyOn(api, 'post').mockRejectedValueOnce(mockError)

    const result = await services.refreshToken({ accessToken })
    expect(result).toEqual(mockError)
  })
})
