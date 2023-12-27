import { AuthLoginUsecase } from '@/data/usecases/auth'
import { BcryptCryptography } from '@/infra/cryptography/bcrypt/bcrypt.cryptography'
import { JwtCryptography } from '@/infra/cryptography/jwt/jwt.cryptography'
import { AuthLoginRepository } from '@/infra/database/mongodb/repositories/auth'
import env from '@/main/config/env'

export const makeAuthLoginUsecase = (): AuthLoginUsecase => {
  const salt = 12
  const bcryptCryptography = new BcryptCryptography(salt)
  const jwtCryptography = new JwtCryptography(env.jwtSecret)
  const authLoginRepository = new AuthLoginRepository()
  return new AuthLoginUsecase(authLoginRepository, bcryptCryptography, jwtCryptography)
}
