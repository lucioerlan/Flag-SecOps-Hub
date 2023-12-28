import { MESSAGES } from '@/domain/entities'
import { IAuthRegister } from '@/domain/usecases/auth'
import { AuthRegisterController } from '@/presentation/controllers/auth'
import { Request } from '@/presentation/protocols'

const makeAuthRegisterUsecase = (): IAuthRegister => {
  class AuthRegisterUsecaseStub implements IAuthRegister {
    async authRegister(): Promise<IAuthRegister.Result> {
      return 'unique_user_id'
    }
  }
  return new AuthRegisterUsecaseStub()
}

const sutFactory = (): { sut: AuthRegisterController; authRegisterUsecaseStub: IAuthRegister } => {
  const authRegisterUsecaseStub = makeAuthRegisterUsecase()
  const sut = new AuthRegisterController(authRegisterUsecaseStub)
  return {
    sut,
    authRegisterUsecaseStub
  }
}

describe('AuthRegisterController', () => {
  it('should return 200 and a success message on successful registration', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      body: {
        name: 'new_user',
        email: 'new_user@mail.com',
        password: 'new_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual('unique_user_id') // Adjust based on your actual success message
  })

  it('should return 409 conflict if user already exists', async () => {
    const { sut, authRegisterUsecaseStub } = sutFactory()
    jest.spyOn(authRegisterUsecaseStub, 'authRegister').mockResolvedValueOnce(MESSAGES.userAlreadyExists)
    const httpRequest = {
      body: {
        name: 'existing_user',
        email: 'existing_user@mail.com',
        password: 'existing_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(409)
    expect(httpResponse.body).toEqual(MESSAGES.userAlreadyExists)
  })

  it('should return 500 if AuthRegisterUsecase throws', async () => {
    const { sut, authRegisterUsecaseStub } = sutFactory()
    jest.spyOn(authRegisterUsecaseStub, 'authRegister').mockImplementationOnce(async () => {
      throw new Error()
    })
    const httpRequest = {
      body: {
        name: 'new_user',
        email: 'new_user@mail.com',
        password: 'new_password'
      }
    } as Request
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
