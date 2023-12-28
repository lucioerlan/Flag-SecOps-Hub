import { AuthRegisterUsecase } from '@/data/usecases/auth'
import { BcryptCryptography } from '@/infra/cryptography/bcrypt/bcrypt.cryptography'
import { AuthRegisterRepository } from '@/infra/database/mongodb/repositories/auth'

export const makeAuthRegisterUsecase = (): AuthRegisterUsecase => {
  const salt = 12
  const bcryptCryptography = new BcryptCryptography(salt)
  const authRegisterRepository = new AuthRegisterRepository()
  return new AuthRegisterUsecase(authRegisterRepository, bcryptCryptography)
}
