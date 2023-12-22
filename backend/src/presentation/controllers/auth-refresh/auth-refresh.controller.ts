import { IAuthRefresh } from '@/domain/usecases/auth-refresh/auth-refresh'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class AuthRefreshController implements Controller {
  constructor(private readonly authRefreshUsecase: IAuthRefresh) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const params = request.body as IAuthRefresh.Params
      const result = await this.authRefreshUsecase.authRefresh(params)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
