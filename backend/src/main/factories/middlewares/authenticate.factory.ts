import { JwtCryptography } from '@/infra/cryptography/jwt/jwt.cryptography'
import env from '@/main/config/env'
import { EnsureAuthenticatedMiddleware } from '@/main/middlewares'

export const makeEnsureAuthenticatedMiddleware = (): EnsureAuthenticatedMiddleware => {
  const jwtKey = env.jwtSecret
  const jwtCryptography = new JwtCryptography(jwtKey)
  return new EnsureAuthenticatedMiddleware(jwtCryptography)
}
