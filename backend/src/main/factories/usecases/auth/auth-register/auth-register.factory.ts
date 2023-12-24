import { AuthRegisterUsecase } from '@/data/usecases/auth/auth-register/auth-register.usecase'
import { BcryptCryptography } from '@/infra/cryptography/bcrypt/bcrypt.cryptography'
import { AuthRegisterRepository } from '@/infra/database/mongodb/repositories/auth/auth-register/auth-register.repository'

export const makeAuthRegisterUsecase = (): AuthRegisterUsecase => {
  const salt = 12
  const bcryptCryptography = new BcryptCryptography(salt)
  const authRegisterRepository = new AuthRegisterRepository()
  return new AuthRegisterUsecase(authRegisterRepository, bcryptCryptography)
}
