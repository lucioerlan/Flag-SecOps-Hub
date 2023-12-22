import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeListFeatureFlagsUsecase } from '@/main/factories/usecases/list-feature-flags/list-feature-flags.factory'
import { ListFeatureFlagsController } from '@/presentation/controllers/list-feature-flags/list-feature-flags.controller'
import { Controller } from '@/presentation/protocols'

export const makeListFeatureFlagsController = (): Controller => {
  const listFeatureFlagsUsecase = makeListFeatureFlagsUsecase()
  const listFeatureFlagsController = new ListFeatureFlagsController(listFeatureFlagsUsecase)
  return makeLogControllerDecorator(listFeatureFlagsController)
}
