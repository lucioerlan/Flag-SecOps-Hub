import { IAuthLogin } from '@/domain/usecases/auth-login/auth-login'

export class AuthLoginUsecase implements IAuthLogin {
  async authLogin(params: IAuthLogin.Params): Promise<IAuthLogin.Result> {
    return { token: `token_${params.username}_generated` }
  }
}
