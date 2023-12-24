import { IHasher, IHashComparer } from '@/data/protocols/cryptography/bcrypt/bcrypt'
import bcrypt from 'bcrypt'

export class BcryptCryptography implements IHasher, IHashComparer {
  constructor(private readonly salt: number) {}

  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}
