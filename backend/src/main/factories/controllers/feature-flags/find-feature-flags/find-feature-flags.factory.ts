import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeFindFeatureFlagUsecase } from '@/main/factories/usecases/feature-flags'
import { FindFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Controller } from '@/presentation/protocols'

export const makeFindFeatureFlagController = (): Controller => {
  const findFeatureFlagUsecase = makeFindFeatureFlagUsecase()
  const findFeatureFlagController = new FindFeatureFlagController(findFeatureFlagUsecase)
  return makeLogControllerDecorator(findFeatureFlagController)
}
