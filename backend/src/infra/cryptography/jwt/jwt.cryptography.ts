import { IEncrypter, IDecrypter } from '@/data/protocols/cryptography/jwt/jwt'
import jwt from 'jsonwebtoken'

export class JwtCryptography implements IEncrypter, IDecrypter {
  constructor(private readonly secret: string) {}

  async encrypt(plaintext: object): Promise<string> {
    return jwt.sign(plaintext, this.secret)
  }

  async decrypt(ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret)
  }
}
