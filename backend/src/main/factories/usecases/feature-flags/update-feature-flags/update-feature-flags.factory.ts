import { UpdateFeatureFlagUsecase } from '@/data/usecases/feature-flags/update-feature-flags/update-feature-flags.usecase'
import { UpdateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags/update-feature-flags/update-feature-flags.repository'

export const makeUpdateFeatureFlagUsecase = (): UpdateFeatureFlagUsecase => {
  const updateFeatureFlagRepository = new UpdateFeatureFlagRepository()
  return new UpdateFeatureFlagUsecase(updateFeatureFlagRepository)
}
