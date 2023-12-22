import { CreateFeatureFlagUsecase } from '@/data/usecases/create-feature-flags/create-feature-flags.usecase'

export const makeCreateFeatureFlagUsecase = (): CreateFeatureFlagUsecase => {
  return new CreateFeatureFlagUsecase()
}
