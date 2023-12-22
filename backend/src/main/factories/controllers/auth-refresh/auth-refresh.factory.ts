import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeAuthRefreshUsecase } from '@/main/factories/usecases/auth-refresh/auth-refresh.factory'
import { AuthRefreshController } from '@/presentation/controllers/auth-refresh/auth-refresh.controller'
import { Controller } from '@/presentation/protocols'

export const makeAuthRefreshController = (): Controller => {
  const authLoginUsecase = makeAuthRefreshUsecase()
  const authLoginController = new AuthRefreshController(authLoginUsecase)
  return makeLogControllerDecorator(authLoginController)
}
