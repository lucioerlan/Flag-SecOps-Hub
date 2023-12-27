import { ListFeatureFlagsUsecase } from '@/data/usecases/feature-flags'
import { ListFeatureFlagsRepository } from '@/infra/database/mongodb/repositories/feature-flags'

export const makeListFeatureFlagsUsecase = (): ListFeatureFlagsUsecase => {
  const listFeatureFlagsRepository = new ListFeatureFlagsRepository()
  return new ListFeatureFlagsUsecase(listFeatureFlagsRepository)
}
