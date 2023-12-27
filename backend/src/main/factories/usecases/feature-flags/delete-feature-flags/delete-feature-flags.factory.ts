import { DeleteFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { DeleteFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

export const makeDeleteFeatureFlagUsecase = (): DeleteFeatureFlagUsecase => {
  const deleteFeatureFlagRepository = new DeleteFeatureFlagRepository()
  return new DeleteFeatureFlagUsecase(deleteFeatureFlagRepository)
}
