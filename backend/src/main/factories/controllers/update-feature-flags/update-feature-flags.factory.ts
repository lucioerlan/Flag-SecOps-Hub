import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeUpdateFeatureFlagUsecase } from '@/main/factories/usecases/update-feature-flags/update-feature-flags.factory'
import { UpdateFeatureFlagController } from '@/presentation/controllers/update-feature-flags/update-feature-flags.controller'
import { Controller } from '@/presentation/protocols'

export const makeUpdateFeatureFlagController = (): Controller => {
  const updateFeatureFlagUsecase = makeUpdateFeatureFlagUsecase()
  const updateFeatureFlagController = new UpdateFeatureFlagController(updateFeatureFlagUsecase)
  return makeLogControllerDecorator(updateFeatureFlagController)
}
