import { IListFeatureFlagsRepository } from '@/data/protocols/database/feature-flags'
import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

export class ListFeatureFlagsUsecase implements IListFeatureFlags {
  constructor(private readonly listFeatureFlagsRepository: IListFeatureFlagsRepository) {}

  async listFeatureFlags(): Promise<IListFeatureFlags.Result> {
    return this.listFeatureFlagsRepository.listFeatureFlags()
  }
}
