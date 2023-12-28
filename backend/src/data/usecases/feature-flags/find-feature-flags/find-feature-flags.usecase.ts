import { IFindFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IFindFeatureFlags } from '@/domain/usecases/feature-flags'

export class FindFeatureFlagUsecase implements IFindFeatureFlags {
  constructor(private readonly findFeatureFlagRepository: IFindFeatureFlagRepository) {}

  async findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result> {
    const findresult = await this.findFeatureFlagRepository.findFeatureFlag(id)
    return findresult || MESSAGES.featureFlagNotFound(id)
  }
}
