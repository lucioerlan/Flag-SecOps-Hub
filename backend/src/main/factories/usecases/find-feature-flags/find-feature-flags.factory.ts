import { FindFeatureFlagUsecase } from '@/data/usecases/find-feature-flags/find-feature-flags.usecase'

export const makeFindFeatureFlagUsecase = (): FindFeatureFlagUsecase => {
  return new FindFeatureFlagUsecase()
}
