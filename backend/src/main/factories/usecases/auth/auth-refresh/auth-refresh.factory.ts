import { AuthRefreshUsecase } from '@/data/usecases/auth/auth-refresh/auth-refresh.usecase'

export const makeAuthRefreshUsecase = (): AuthRefreshUsecase => {
  return new AuthRefreshUsecase()
}
