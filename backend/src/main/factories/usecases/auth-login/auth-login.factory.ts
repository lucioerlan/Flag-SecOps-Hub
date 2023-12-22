import { AuthLoginUsecase } from '@/data/usecases/auth-login/auth-login.usecase'

export const makeAuthLoginUsecase = (): AuthLoginUsecase => {
  return new AuthLoginUsecase()
}
