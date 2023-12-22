import { IDeleteFeatureFlag } from '@/domain/usecases/delete-feature-flags/delete-feature-flags'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class DeleteFeatureFlagController implements Controller {
  constructor(private readonly deleteFeatureFlagUsecase: IDeleteFeatureFlag) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IDeleteFeatureFlag.Params

      const deletedFeatureFlag = await this.deleteFeatureFlagUsecase.deleteFeatureFlag(id)
      return ok(deletedFeatureFlag)
    } catch (error) {
      return serverError(error)
    }
  }
}
