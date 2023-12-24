import { MESSAGES } from '@/domain/entities'
import { IFindFeatureFlags } from '@/domain/usecases/feature-flags'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class FindFeatureFlagController implements Controller {
  constructor(private readonly findFeatureFlagUsecase: IFindFeatureFlags) {}

  public async handle(request: Request): Promise<HttpResponse> {
    try {
      const { id } = request.params as IFindFeatureFlags.Params
      const result = await this.findFeatureFlagUsecase.findFeatureFlag(id)

      if (result === MESSAGES.featureFlagNotFound(id)) return notFound(result)
      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
