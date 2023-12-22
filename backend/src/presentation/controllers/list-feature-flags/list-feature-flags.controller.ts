import { IListFeatureFlags } from '@/domain/usecases/list-feature-flags/list-feature-flags'
import { ok, badRequest } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ListFeatureFlagsController implements Controller {
  constructor(private readonly listFeatureFlagsUsecase: IListFeatureFlags) {}

  public async handle(): Promise<HttpResponse> {
    try {
      const listFeatureFlags = await this.listFeatureFlagsUsecase.listFeatureFlags()
      return ok(listFeatureFlags)
    } catch (error) {
      return badRequest('Failed to list feature flags')
    }
  }
}
