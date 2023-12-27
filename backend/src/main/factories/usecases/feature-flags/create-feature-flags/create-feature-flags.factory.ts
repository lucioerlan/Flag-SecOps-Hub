import { CreateFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { CreateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

export const makeCreateFeatureFlagUsecase = (): CreateFeatureFlagUsecase => {
  const createFeatureFlagRepository = new CreateFeatureFlagRepository()
  return new CreateFeatureFlagUsecase(createFeatureFlagRepository)
}
