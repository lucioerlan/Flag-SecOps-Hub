import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDeleteFeatureFlagUsecase } from '@/main/factories/usecases/feature-flags'
import { DeleteFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Controller } from '@/presentation/protocols'

export const makeDeleteFeatureFlagController = (): Controller => {
  const deleteFeatureFlagUsecase = makeDeleteFeatureFlagUsecase()
  const deleteFeatureFlagController = new DeleteFeatureFlagController(deleteFeatureFlagUsecase)
  return makeLogControllerDecorator(deleteFeatureFlagController)
}
