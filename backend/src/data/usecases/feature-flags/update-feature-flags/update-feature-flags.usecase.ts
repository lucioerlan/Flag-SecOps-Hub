import { IUpdateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IUpdateFeatureFlag } from '@/domain/usecases/feature-flags'

export class UpdateFeatureFlagUsecase implements IUpdateFeatureFlag {
  constructor(private readonly updateFeatureFlagRepository: IUpdateFeatureFlagRepository) {}

  async updateFeatureFlag(data: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result> {
    const updateResult = await this.updateFeatureFlagRepository.updateFeatureFlag(data)
    return updateResult || MESSAGES.featureFlagNotFound(data.id)
  }
}
