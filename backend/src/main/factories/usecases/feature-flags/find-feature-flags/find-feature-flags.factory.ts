import { FindFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { FindFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

export const makeFindFeatureFlagUsecase = (): FindFeatureFlagUsecase => {
  const findFeatureFlagRepository = new FindFeatureFlagRepository()
  return new FindFeatureFlagUsecase(findFeatureFlagRepository)
}
