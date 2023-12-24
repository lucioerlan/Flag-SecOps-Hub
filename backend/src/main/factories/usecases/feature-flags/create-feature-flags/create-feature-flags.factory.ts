import { CreateFeatureFlagUsecase } from '@/data/usecases/feature-flags/create-feature-flags/create-feature-flags.usecase'
import { CreateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags/create-feature-flags/create-feature-flags.repository'

export const makeCreateFeatureFlagUsecase = (): CreateFeatureFlagUsecase => {
  const createFeatureFlagRepository = new CreateFeatureFlagRepository()
  return new CreateFeatureFlagUsecase(createFeatureFlagRepository)
}
