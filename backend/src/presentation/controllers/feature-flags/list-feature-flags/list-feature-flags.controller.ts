import { IListFeatureFlags } from '@/domain/usecases/feature-flags'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListFeatureFlagsController implements Controller {
  constructor(private readonly listFeatureFlagsUsecase: IListFeatureFlags) {}

  public async handle(): Promise<HttpResponse> {
    try {
      const result = await this.listFeatureFlagsUsecase.listFeatureFlags()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
