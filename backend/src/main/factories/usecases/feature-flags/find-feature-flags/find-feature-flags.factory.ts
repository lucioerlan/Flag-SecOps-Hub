import { FindFeatureFlagUsecase } from '@/data/usecases/feature-flags/find-feature-flags/find-feature-flags.usecase'
import { FindFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags/find-feature-flags/find-feature-flags.repository'

export const makeFindFeatureFlagUsecase = (): FindFeatureFlagUsecase => {
  const findFeatureFlagRepository = new FindFeatureFlagRepository()
  return new FindFeatureFlagUsecase(findFeatureFlagRepository)
}
