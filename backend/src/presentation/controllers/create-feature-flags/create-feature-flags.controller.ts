import { ICreateFeatureFlag } from '@/domain/usecases/create-feature-flags/create-feature-flags'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class CreateFeatureFlagController implements Controller {
  constructor(private readonly createFeatureFlagUsecase: ICreateFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { name, description, state } = request.body as ICreateFeatureFlag.Params
      const data = { name, description, state }

      const createdFeatureFlag = await this.createFeatureFlagUsecase.createFeatureFlag(data)
      return ok(createdFeatureFlag)
    } catch (error) {
      return serverError(error)
    }
  }
}
