import { IHashComparer } from '@/data/protocols/cryptography/bcrypt/bcrypt'
import { IEncrypter } from '@/data/protocols/cryptography/jwt/jwt'
import { IAuthLoginRepository } from '@/data/protocols/database/auth'
import { MESSAGES, STATUS } from '@/domain/entities'
import { IAuthLogin } from '@/domain/usecases/auth'

export class AuthLoginUsecase implements IAuthLogin {
  constructor(
    private readonly authLoginRepository: IAuthLoginRepository,
    private readonly hashComparer: IHashComparer,
    private readonly encrypter: IEncrypter
  ) {}

  async authLogin(params: IAuthLogin.Params): Promise<IAuthLogin.Result> {
    const userAccount = await this.authLoginRepository.findUserByEmail(params.email)
    if (!userAccount)
      return {
        type: STATUS.Error,
        message: MESSAGES.invalidEmail
      }

    const isPasswordValid = await this.hashComparer.compare(params.password, userAccount.password)
    if (!isPasswordValid)
      return {
        type: STATUS.Error,
        message: MESSAGES.invalidPassword
      }

    const accessToken = await this.encrypter.encrypt({
      id: userAccount.id,
      name: userAccount.name,
      email: userAccount.email
    })

    return { type: STATUS.Success, accessToken, message: MESSAGES.loginSuccess }
  }
}
