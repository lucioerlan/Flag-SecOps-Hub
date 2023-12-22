import { IAuthLogin } from '@/domain/usecases/auth-login/auth-login'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class AuthLoginController implements Controller {
  constructor(private readonly authLoginUsecase: IAuthLogin) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const params = request.body as IAuthLogin.Params
      const result = await this.authLoginUsecase.authLogin(params)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
