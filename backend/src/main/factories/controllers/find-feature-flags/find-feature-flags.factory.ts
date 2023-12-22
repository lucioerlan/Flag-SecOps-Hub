import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeFindFeatureFlagUsecase } from '@/main/factories/usecases/find-feature-flags/find-feature-flags.factory'
import { FindFeatureFlagController } from '@/presentation/controllers/find-feature-flags/find-feature-flags.controller'
import { Controller } from '@/presentation/protocols'

export const makeFindFeatureFlagController = (): Controller => {
  const findFeatureFlagUsecase = makeFindFeatureFlagUsecase()
  const findFeatureFlagController = new FindFeatureFlagController(findFeatureFlagUsecase)
  return makeLogControllerDecorator(findFeatureFlagController)
}
