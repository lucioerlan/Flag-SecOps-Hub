import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeListFeatureFlagsUsecase } from '@/main/factories/usecases/feature-flags'
import { ListFeatureFlagsController } from '@/presentation/controllers/feature-flags'
import { Controller } from '@/presentation/protocols'

export const makeListFeatureFlagsController = (): Controller => {
  const listFeatureFlagsUsecase = makeListFeatureFlagsUsecase()
  const listFeatureFlagsController = new ListFeatureFlagsController(listFeatureFlagsUsecase)
  return makeLogControllerDecorator(listFeatureFlagsController)
}
