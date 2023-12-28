import { AuthRefreshUsecase } from '@/data/usecases/auth'
import { IAuthRefresh } from '@/domain/usecases/auth'

const sutFactory = (): AuthRefreshUsecase => {
  return new AuthRefreshUsecase()
}

describe('AuthRefreshUsecase', () => {
  describe('authRefresh', () => {
    it('should return a new access token for valid refresh token', async () => {
      const sut = sutFactory()
      const validParams: IAuthRefresh.Params = { refreshToken: 'validRefreshToken' }
      const result = await sut.authRefresh(validParams)

      expect(result).toEqual({ token: 'newlyGeneratedAccessToken' })
    })

    it('should return an indication of failure or invalid token for invalid refresh token', async () => {
      const sut = sutFactory()
      const invalidParams: IAuthRefresh.Params = { refreshToken: 'invalidRefreshToken' }
      const result = await sut.authRefresh(invalidParams)

      expect(result).toEqual({ token: 'invalidAccessToken' })
    })
  })
})
