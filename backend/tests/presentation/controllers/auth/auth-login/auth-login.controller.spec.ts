import { STATUS } from '@/domain/entities'
import { IAuthLogin } from '@/domain/usecases/auth'
import { AuthLoginController } from '@/presentation/controllers/auth'
import { Request } from '@/presentation/protocols'

const makeAuthLoginUsecase = (): IAuthLogin => {
  class AuthLoginUsecaseStub implements IAuthLogin {
    async authLogin(): Promise<IAuthLogin.Result> {
      return {
        type: STATUS.Success,
        accessToken: 'param_token',
        message: 'param_message'
      }
    }
  }
  return new AuthLoginUsecaseStub()
}

const sutFactory = (): { sut: AuthLoginController; authLoginUsecaseStub: IAuthLogin } => {
  const authLoginUsecaseStub = makeAuthLoginUsecase()
  const sut = new AuthLoginController(authLoginUsecaseStub)
  return {
    sut,
    authLoginUsecaseStub
  }
}

describe('AuthLoginController', () => {
  it('should return 200 if valid credentials are provided', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      body: {
        email: 'valid_email@mail.com',
        password: 'valid_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      accessToken: 'param_token',
      message: 'param_message',
      type: STATUS.Success
    })
  })

  it('should return 401 if invalid credentials are provided', async () => {
    const { sut, authLoginUsecaseStub } = sutFactory()
    jest.spyOn(authLoginUsecaseStub, 'authLogin').mockResolvedValueOnce({
      type: STATUS.Error,
      message: 'Invalid credentials'
    })
    const httpRequest = {
      body: {
        email: 'invalid_email@mail.com',
        password: 'invalid_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(401)
    expect(httpResponse.body).toEqual({
      message: 'Invalid credentials',
      type: STATUS.Error
    })
  })

  it('should return 500 if AuthLoginUsecase throws', async () => {
    const { sut, authLoginUsecaseStub } = sutFactory()
    jest.spyOn(authLoginUsecaseStub, 'authLogin').mockImplementationOnce(async () => {
      throw new Error()
    })
    const httpRequest = {
      body: {
        email: 'param_email@mail.com',
        password: 'param_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
