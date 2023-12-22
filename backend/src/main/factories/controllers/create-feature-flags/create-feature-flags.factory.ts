import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeCreateFeatureFlagUsecase } from '@/main/factories/usecases/create-feature-flags/create-feature-flags.factory'
import { CreateFeatureFlagController } from '@/presentation/controllers/create-feature-flags/create-feature-flags.controller'
import { Controller } from '@/presentation/protocols'

export const makeCreateFeatureFlagController = (): Controller => {
  const createFeatureFlagUsecase = makeCreateFeatureFlagUsecase()
  const createFeatureFlagController = new CreateFeatureFlagController(createFeatureFlagUsecase)
  return makeLogControllerDecorator(createFeatureFlagController)
}
