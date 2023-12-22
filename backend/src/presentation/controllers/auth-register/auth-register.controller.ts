import { IAuthRegister } from '@/domain/usecases/auth-register/auth-register'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class AuthRegisterController implements Controller {
  constructor(private readonly authRegisterUsecase: IAuthRegister) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const params = request.body as IAuthRegister.Params
      const result = await this.authRegisterUsecase.authRegister(params)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
