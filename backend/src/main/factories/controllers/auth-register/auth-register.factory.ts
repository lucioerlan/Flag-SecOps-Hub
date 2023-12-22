import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeAuthRegisterUsecase } from '@/main/factories/usecases/auth-register/auth-register.factory'
import { AuthRegisterController } from '@/presentation/controllers/auth-register/auth-register.controller'
import { Controller } from '@/presentation/protocols'

export const makeAuthRegisterController = (): Controller => {
  const authRegisterUsecase = makeAuthRegisterUsecase()
  const authRegisterController = new AuthRegisterController(authRegisterUsecase)
  return makeLogControllerDecorator(authRegisterController)
}
