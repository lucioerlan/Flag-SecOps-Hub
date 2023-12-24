import { MESSAGES } from '@/domain/entities'
import { IDeleteFeatureFlag } from '@/domain/usecases/feature-flags'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class DeleteFeatureFlagController implements Controller {
  constructor(private readonly deleteFeatureFlagUsecase: IDeleteFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IDeleteFeatureFlag.Params
      const result = await this.deleteFeatureFlagUsecase.deleteFeatureFlag(id)

      if (result === MESSAGES.featureFlagNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
