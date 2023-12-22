import { IFeatureFlags } from '@/domain/usecases/list-feature-flags/feature-flags'
import { ok, badRequest } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListFeatureFlagsController implements Controller {
  constructor(private readonly listFeatureFlagsUsecase: IFeatureFlags) {}

  public async handle(): Promise<HttpResponse> {
    try {
      const listFeatureFlags = await this.listFeatureFlagsUsecase.listFeatureFlags()
      return ok(listFeatureFlags)
    } catch (error) {
      return badRequest('Failed to list feature flags')
    }
  }
}
