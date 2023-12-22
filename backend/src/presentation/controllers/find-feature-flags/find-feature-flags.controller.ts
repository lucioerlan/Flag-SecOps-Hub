import { IFindFeatureFlags } from '@/domain/usecases/find-feature-flags/find-feature-flags'
import { ok, badRequest, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class FindFeatureFlagController implements Controller {
  constructor(private readonly findFeatureFlagUsecase: IFindFeatureFlags) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IFindFeatureFlags.Params
      const featureFlag = await this.findFeatureFlagUsecase.findFeatureFlag(id)

      if (!featureFlag) {
        return badRequest('Feature Flag not found')
      }

      return ok(featureFlag)
    } catch (error) {
      return serverError(error)
    }
  }
}
