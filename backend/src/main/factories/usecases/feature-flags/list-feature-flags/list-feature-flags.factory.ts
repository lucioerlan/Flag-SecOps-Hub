import { ListFeatureFlagsUsecase } from '@/data/usecases/feature-flags/list-feature-flags/list-feature-flags.usecase'
import { ListFeatureFlagsRepository } from '@/infra/database/mongodb/repositories/feature-flags/list-feature-flags/list-feature-flags.repository'

export const makeListFeatureFlagsUsecase = (): ListFeatureFlagsUsecase => {
  const listFeatureFlagsRepository = new ListFeatureFlagsRepository()
  return new ListFeatureFlagsUsecase(listFeatureFlagsRepository)
}
