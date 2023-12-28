import { UpdateFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { UpdateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

export const makeUpdateFeatureFlagUsecase = (): UpdateFeatureFlagUsecase => {
  const updateFeatureFlagRepository = new UpdateFeatureFlagRepository()
  return new UpdateFeatureFlagUsecase(updateFeatureFlagRepository)
}
