import { UpdateFeatureFlagUsecase } from '@/data/usecases/update-feature-flags/update-feature-flags.usecase'

export const makeUpdateFeatureFlagUsecase = (): UpdateFeatureFlagUsecase => {
  return new UpdateFeatureFlagUsecase()
}
