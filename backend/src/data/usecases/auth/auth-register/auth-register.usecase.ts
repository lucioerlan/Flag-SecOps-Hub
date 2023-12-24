import { IHasher } from '@/data/protocols/cryptography/bcrypt/bcrypt'
import { IAuthRegisterRepository } from '@/data/protocols/database/auth'
import { MESSAGES } from '@/domain/entities'
import { IAuthRegister } from '@/domain/usecases/auth'

export class AuthRegisterUsecase implements IAuthRegister {
  constructor(
    private readonly authRegisterRepository: IAuthRegisterRepository,
    private readonly hasher: IHasher
  ) {}

  async authRegister(params: IAuthRegister.Params): Promise<IAuthRegister.Result> {
    const existingUser = await this.authRegisterRepository.findUserByEmail(params.email)
    if (existingUser) return MESSAGES.userAlreadyExists

    const hashedPassword = await this.hasher.hash(params.password)
    const userId = await this.authRegisterRepository.addUser({ ...params, password: hashedPassword })
    return userId ? MESSAGES.userCreationSuccess(params.email, userId) : MESSAGES.userCreationFail
  }
}
