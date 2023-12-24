import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeAuthRefreshUsecase } from '@/main/factories/usecases/auth'
import { AuthRefreshController } from '@/presentation/controllers/auth'
import { Controller } from '@/presentation/protocols'

export const makeAuthRefreshController = (): Controller => {
  const authLoginUsecase = makeAuthRefreshUsecase()
  const authLoginController = new AuthRefreshController(authLoginUsecase)
  return makeLogControllerDecorator(authLoginController)
}
