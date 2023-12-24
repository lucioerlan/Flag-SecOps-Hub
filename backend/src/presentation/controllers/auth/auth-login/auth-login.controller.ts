import { STATUS } from '@/domain/entities'
import { IAuthLogin } from '@/domain/usecases/auth'
import { ok, serverError, unauthorized } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class AuthLoginController implements Controller {
  constructor(private readonly authLoginUsecase: IAuthLogin) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const params = request.body as IAuthLogin.Params
      const result = await this.authLoginUsecase.authLogin(params)

      if (result.type === STATUS.Error) return unauthorized(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
