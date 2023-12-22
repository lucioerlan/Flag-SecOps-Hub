import { IUpdateFeatureFlag } from '@/domain/usecases/update-feature-flags/update-feature-flags'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class UpdateFeatureFlagController implements Controller {
  constructor(private readonly updateFeatureFlagUsecase: IUpdateFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IUpdateFeatureFlag.Params
      const { name, description, state } = request.body as IUpdateFeatureFlag.Params
      const data: IUpdateFeatureFlag.Params = { id, name, description, state }

      const updatedFeatureFlag = await this.updateFeatureFlagUsecase.updateFeatureFlag(data)
      return ok(updatedFeatureFlag)
    } catch (error) {
      return serverError(error)
    }
  }
}
