import { MESSAGES } from '@/domain/entities'
import { IUpdateFeatureFlag } from '@/domain/usecases/feature-flags'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class UpdateFeatureFlagController implements Controller {
  constructor(private readonly updateFeatureFlagUsecase: IUpdateFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IUpdateFeatureFlag.Params
      const updateData = request.body as IUpdateFeatureFlag.Params
      const result = await this.updateFeatureFlagUsecase.updateFeatureFlag({ id, ...updateData })

      if (result === MESSAGES.featureFlagNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
