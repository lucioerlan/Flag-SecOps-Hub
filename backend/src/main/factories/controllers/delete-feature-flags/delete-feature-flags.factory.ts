import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDeleteFeatureFlagUsecase } from '@/main/factories/usecases/delete-feature-flags/delete-feature-flags.factory'
import { DeleteFeatureFlagController } from '@/presentation/controllers/delete-feature-flags/delete-feature-flags.controller'
import { Controller } from '@/presentation/protocols'

export const makeDeleteFeatureFlagController = (): Controller => {
  const deleteFeatureFlagUsecase = makeDeleteFeatureFlagUsecase()
  const deleteFeatureFlagController = new DeleteFeatureFlagController(deleteFeatureFlagUsecase)
  return makeLogControllerDecorator(deleteFeatureFlagController)
}
