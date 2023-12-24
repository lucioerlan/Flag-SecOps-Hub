import { IDeleteFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IDeleteFeatureFlag } from '@/domain/usecases/feature-flags'

export class DeleteFeatureFlagUsecase implements IDeleteFeatureFlag {
  constructor(private readonly deleteFeatureFlagRepository: IDeleteFeatureFlagRepository) {}

  async deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlag.Result> {
    const deleteResult = await this.deleteFeatureFlagRepository.deleteFeatureFlag(id)
    return deleteResult ? MESSAGES.deleteFeatureFlagSuccess(id) : MESSAGES.featureFlagNotFound(id)
  }
}
