import { DeleteFeatureFlagUsecase } from '@/data/usecases/feature-flags/delete-feature-flags/delete-feature-flags.usecase'
import { DeleteFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags/delete-feature-flags/delete-feature-flags.repository'

export const makeDeleteFeatureFlagUsecase = (): DeleteFeatureFlagUsecase => {
  const deleteFeatureFlagRepository = new DeleteFeatureFlagRepository()
  return new DeleteFeatureFlagUsecase(deleteFeatureFlagRepository)
}
