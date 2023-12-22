import { IAuthRegister } from '@/domain/usecases/auth-register/auth-register'

export class AuthRegisterUsecase implements IAuthRegister {
  async authRegister(params: IAuthRegister.Params): Promise<IAuthRegister.Result> {
    return { message: `Registered user ${params.username}` }
  }
}
