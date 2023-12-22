import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeAuthLoginUsecase } from '@/main/factories/usecases/auth-login/auth-login.factory'
import { AuthLoginController } from '@/presentation/controllers/auth-login/auth-login.controller'
import { Controller } from '@/presentation/protocols'

export const makeAuthLoginController = (): Controller => {
  const authLoginUsecase = makeAuthLoginUsecase()
  const authLoginController = new AuthLoginController(authLoginUsecase)
  return makeLogControllerDecorator(authLoginController)
}
