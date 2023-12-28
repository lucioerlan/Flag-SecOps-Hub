import { IAuthRefresh } from '@/domain/usecases/auth'
import { AuthRefreshController } from '@/presentation/controllers/auth'
import { Request } from '@/presentation/protocols'

const makeAuthRefreshUsecase = (): IAuthRefresh => {
  class AuthRefreshUsecaseStub implements IAuthRefresh {
    async authRefresh(): Promise<IAuthRefresh.Result> {
      return {
        token: 'new_token',
        refreshToken: 'new_refresh_token'
      }
    }
  }
  return new AuthRefreshUsecaseStub()
}

const sutFactory = (): { sut: AuthRefreshController; authRefreshUsecaseStub: IAuthRefresh } => {
  const authRefreshUsecaseStub = makeAuthRefreshUsecase()
  const sut = new AuthRefreshController(authRefreshUsecaseStub)
  return {
    sut,
    authRefreshUsecaseStub
  }
}

describe('AuthRefreshController', () => {
  it('should return 200 and a new access token on successful refresh', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      body: {
        refreshToken: 'valid_refresh_token'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      refreshToken: 'new_refresh_token',
      token: 'new_token'
    })
  })

  it('should return 500 if AuthRefreshUsecase throws', async () => {
    const { sut, authRefreshUsecaseStub } = sutFactory()
    jest.spyOn(authRefreshUsecaseStub, 'authRefresh').mockImplementationOnce(async () => {
      throw new Error()
    })
    const httpRequest = {
      body: {
        refreshToken: 'valid_refresh_token'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
