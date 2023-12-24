import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeUpdateFeatureFlagUsecase } from '@/main/factories/usecases/feature-flags'
import { UpdateFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Controller } from '@/presentation/protocols'

export const makeUpdateFeatureFlagController = (): Controller => {
  const updateFeatureFlagUsecase = makeUpdateFeatureFlagUsecase()
  const updateFeatureFlagController = new UpdateFeatureFlagController(updateFeatureFlagUsecase)
  return makeLogControllerDecorator(updateFeatureFlagController)
}
