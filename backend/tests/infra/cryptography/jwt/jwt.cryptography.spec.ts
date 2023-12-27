import { JwtCryptography } from '@/infra/cryptography/jwt/jwt.cryptography'
import jwt from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
  verify: jest.fn()
}))

const secret = 'any_secret'
const sutFactory = () => {
  const sut = new JwtCryptography(secret)
  return { sut }
}

describe('JwtCryptography', () => {
  describe('encrypt', () => {
    it('should call sign with correct values', async () => {
      const { sut } = sutFactory()
      const signSpy = jest.spyOn(jwt, 'sign')
      const plaintext = { any: 'data' }
      await sut.encrypt(plaintext)

      expect(signSpy).toHaveBeenCalledWith(plaintext, secret)
    })

    it('should return a token on sign success', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => 'any_token')
      const token = await sut.encrypt({ any: 'data' })

      expect(token).toBe('any_token')
    })

    it('should throw if sign throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.encrypt({ any: 'data' })

      await expect(promise).rejects.toThrow()
    })
  })

  describe('decrypt', () => {
    it('should call verify with correct values', async () => {
      const { sut } = sutFactory()
      const verifySpy = jest.spyOn(jwt, 'verify')
      const token = 'any_token'
      await sut.decrypt(token)

      expect(verifySpy).toHaveBeenCalledWith(token, secret)
    })

    it('should return a value on verify success', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'verify').mockImplementationOnce(() => 'any_value')
      const value = await sut.decrypt('any_token')

      expect(value).toBe('any_value')
    })

    it('should throw if verify throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'verify').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.decrypt('any_token')

      await expect(promise).rejects.toThrow()
    })
  })
})
