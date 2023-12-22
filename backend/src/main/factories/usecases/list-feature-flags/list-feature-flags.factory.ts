import { ListFeatureFlagsUsecase } from '@/data/usecases/list-feature-flags/list-feature-flags.usecase'

export const makeCreateListFeatureFlagsUsecase = (): ListFeatureFlagsUsecase => {
  return new ListFeatureFlagsUsecase()
}
