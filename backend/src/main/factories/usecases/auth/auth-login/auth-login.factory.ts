import { AuthLoginUsecase } from '@/data/usecases/auth/auth-login/auth-login.usecase'
import { BcryptCryptography } from '@/infra/cryptography/bcrypt/bcrypt.cryptography'
import { JwtCryptography } from '@/infra/cryptography/jwt/jwt.cryptography'
import { AuthLoginRepository } from '@/infra/database/mongodb/repositories/auth/auth-login/auth-login.repository'
import env from '@/main/config/env'

export const makeAuthLoginUsecase = (): AuthLoginUsecase => {
  const salt = 12
  const bcryptCryptography = new BcryptCryptography(salt)
  const jwtCryptography = new JwtCryptography(env.jwtSecret)
  const authLoginRepository = new AuthLoginRepository()
  return new AuthLoginUsecase(authLoginRepository, bcryptCryptography, jwtCryptography)
}
