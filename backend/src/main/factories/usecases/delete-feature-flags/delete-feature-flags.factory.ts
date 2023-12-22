import { DeleteFeatureFlagUsecase } from '@/data/usecases/delete-feature-flags/delete-feature-flags.usecase'

export const makeDeleteFeatureFlagUsecase = (): DeleteFeatureFlagUsecase => {
  return new DeleteFeatureFlagUsecase()
}
