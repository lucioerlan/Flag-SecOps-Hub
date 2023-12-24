import { ICreateFeatureFlag } from '@/domain/usecases/feature-flags'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class CreateFeatureFlagController implements Controller {
  constructor(private readonly createFeatureFlagUsecase: ICreateFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { name, description, state } = request.body as ICreateFeatureFlag.Params
      const data = { name, description, state }

      const result = await this.createFeatureFlagUsecase.createFeatureFlag(data)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
