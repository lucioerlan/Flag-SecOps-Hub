import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeCreateFeatureFlagUsecase } from '@/main/factories/usecases/feature-flags'
import { CreateFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Controller } from '@/presentation/protocols'

export const makeCreateFeatureFlagController = (): Controller => {
  const createFeatureFlagUsecase = makeCreateFeatureFlagUsecase()
  const createFeatureFlagController = new CreateFeatureFlagController(createFeatureFlagUsecase)
  return makeLogControllerDecorator(createFeatureFlagController)
}
