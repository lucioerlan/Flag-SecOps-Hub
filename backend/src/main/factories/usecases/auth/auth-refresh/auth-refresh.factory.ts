import { AuthRefreshUsecase } from '@/data/usecases/auth'

export const makeAuthRefreshUsecase = (): AuthRefreshUsecase => {
  return new AuthRefreshUsecase()
}
