import { ListFeatureFlagsUsecase } from '@/data/usecases/list-feature-flags/list-feature-flags.usecase'

export const makeListFeatureFlagsUsecase = (): ListFeatureFlagsUsecase => {
  return new ListFeatureFlagsUsecase()
}
