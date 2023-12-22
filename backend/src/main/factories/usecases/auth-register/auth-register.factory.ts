import { AuthRegisterUsecase } from '@/data/usecases/auth-register/auth-register.usecase'

export const makeAuthRegisterUsecase = (): AuthRegisterUsecase => {
  return new AuthRegisterUsecase()
}
