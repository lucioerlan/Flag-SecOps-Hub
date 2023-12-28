import { IHashComparer } from '@/data/protocols/cryptography/bcrypt/bcrypt'
import { IEncrypter } from '@/data/protocols/cryptography/jwt/jwt'
import { IAuthLoginRepository } from '@/data/protocols/database/auth'
import { AuthLoginUsecase } from '@/data/usecases/auth'
import { MESSAGES, STATUS } from '@/domain/entities'
import { IAuthLogin } from '@/domain/usecases/auth'

const makeAuthLoginRepository = (): IAuthLoginRepository => {
  class AuthLoginRepositoryStub implements IAuthLoginRepository {
    async findUserByEmail(): Promise<IAuthLoginRepository.Result> {
      return {
        id: 'valid_id',
        name: 'valid_name',
        email: 'valid_email@mail.com',
        password: 'hashed_password'
      }
    }
  }
  return new AuthLoginRepositoryStub()
}

const makeHashComparer = (): IHashComparer => {
  class HashComparerStub implements IHashComparer {
    async compare(): Promise<boolean> {
      return true
    }
  }
  return new HashComparerStub()
}

const makeEncrypter = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    async encrypt(): Promise<string> {
      return 'param_token'
    }
  }
  return new EncrypterStub()
}

const sutFactory = (): {
  sut: IAuthLogin
  authLoginRepositoryStub: IAuthLoginRepository
  hashComparerStub: IHashComparer
  encrypterStub: IEncrypter
} => {
  const authLoginRepositoryStub = makeAuthLoginRepository()
  const hashComparerStub = makeHashComparer()
  const encrypterStub = makeEncrypter()
  const sut = new AuthLoginUsecase(authLoginRepositoryStub, hashComparerStub, encrypterStub)

  return { sut, authLoginRepositoryStub, hashComparerStub, encrypterStub }
}

describe('AuthLoginUsecase', () => {
  it('should return an access token on successful login', async () => {
    const { sut } = sutFactory()
    const loginData = { email: 'valid_email@mail.com', password: 'valid_password' }
    const result = await sut.authLogin(loginData)
    expect(result).toEqual({ type: STATUS.Success, accessToken: 'param_token', message: MESSAGES.loginSuccess })
  })

  it('should return an error if no user is found with the provided email', async () => {
    const { sut, authLoginRepositoryStub } = sutFactory()
    jest.spyOn(authLoginRepositoryStub, 'findUserByEmail').mockResolvedValueOnce(null)

    const result = await sut.authLogin({ email: 'invalid_email@mail.com', password: 'param_password' })
    expect(result).toEqual({ type: STATUS.Error, message: MESSAGES.invalidEmail })
  })

  it('should return an error if the password is invalid', async () => {
    const { sut, hashComparerStub } = sutFactory()
    jest.spyOn(hashComparerStub, 'compare').mockResolvedValueOnce(false)

    const result = await sut.authLogin({ email: 'valid_email@mail.com', password: 'invalid_password' })
    expect(result).toEqual({ type: STATUS.Error, message: MESSAGES.invalidPassword })
  })
})
