import { IHasher } from '@/data/protocols/cryptography/bcrypt/bcrypt'
import { IAuthRegisterRepository } from '@/data/protocols/database/auth'
import { AuthRegisterUsecase } from '@/data/usecases/auth'
import { MESSAGES } from '@/domain/entities'
import { IAuthRegister } from '@/domain/usecases/auth'

const makeAuthRegisterRepository = (): IAuthRegisterRepository => {
  class AuthRegisterRepositoryStub implements IAuthRegisterRepository {
    async addUser(): Promise<string> {
      return 'valid_user_id' //
    }
    async findUserByEmail(): Promise<IAuthRegisterRepository.Result> {
      return null
    }
  }
  return new AuthRegisterRepositoryStub()
}

const makeHasher = (): IHasher => {
  class HasherStub implements IHasher {
    async hash(): Promise<string> {
      return 'hashed_password'
    }
  }
  return new HasherStub()
}

const sutFactory = (): {
  sut: IAuthRegister
  authRegisterRepositoryStub: IAuthRegisterRepository
  hasherStub: IHasher
} => {
  const authRegisterRepositoryStub = makeAuthRegisterRepository()
  const hasherStub = makeHasher()
  const sut = new AuthRegisterUsecase(authRegisterRepositoryStub, hasherStub)

  return { sut, authRegisterRepositoryStub, hasherStub }
}

describe('AuthRegisterUsecase', () => {
  it('should return success message on successful registration', async () => {
    const { sut } = sutFactory()
    const registerData = { name: 'valid_name', email: 'new_user@mail.com', password: 'valid_password' }
    const result = await sut.authRegister(registerData)
    expect(result).toBe(MESSAGES.userCreationSuccess(registerData.email, 'valid_user_id'))
  })

  it('should return user already exists message if user already exists', async () => {
    const { sut, authRegisterRepositoryStub } = sutFactory()
    jest.spyOn(authRegisterRepositoryStub, 'findUserByEmail').mockResolvedValueOnce('existing_user')

    const result = await sut.authRegister({
      name: 'valid_name',
      email: 'existing_user@mail.com',
      password: 'valid_password'
    })
    expect(result).toBe(MESSAGES.userAlreadyExists)
  })

  it('should return user creation fail message if unable to create user', async () => {
    const { sut, authRegisterRepositoryStub } = sutFactory()
    jest.spyOn(authRegisterRepositoryStub, 'addUser').mockResolvedValueOnce(null)

    const result = await sut.authRegister({
      name: 'valid_name',
      email: 'new_user@mail.com',
      password: 'valid_password'
    })
    expect(result).toBe(MESSAGES.userCreationFail)
  })
})
