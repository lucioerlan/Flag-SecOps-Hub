import { JwtCryptography } from '@/infra/cryptography/jwt/jwt.cryptography'
import jwt from 'jsonwebtoken'

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
  verify: jest.fn()
}))

const secret = 'param_secret'
const sutFactory = () => {
  const sut = new JwtCryptography(secret)
  return { sut }
}

describe('JwtCryptography', () => {
  describe('encrypt', () => {
    it('should call sign with correct values', async () => {
      const { sut } = sutFactory()
      const signSpy = jest.spyOn(jwt, 'sign')
      const plaintext = { param: 'data' }
      await sut.encrypt(plaintext)

      expect(signSpy).toHaveBeenCalledWith(plaintext, secret)
    })

    it('should return a token on sign success', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => 'param_token')
      const token = await sut.encrypt({ param: 'data' })

      expect(token).toBe('param_token')
    })

    it('should throw if sign throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'sign').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.encrypt({ param: 'data' })

      await expect(promise).rejects.toThrow()
    })
  })

  describe('decrypt', () => {
    it('should call verify with correct values', async () => {
      const { sut } = sutFactory()
      const verifySpy = jest.spyOn(jwt, 'verify')
      const token = 'param_token'
      await sut.decrypt(token)

      expect(verifySpy).toHaveBeenCalledWith(token, secret)
    })

    it('should return a value on verify success', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'verify').mockImplementationOnce(() => 'param_value')
      const value = await sut.decrypt('param_token')

      expect(value).toBe('param_value')
    })

    it('should throw if verify throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(jwt, 'verify').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.decrypt('param_token')

      await expect(promise).rejects.toThrow()
    })
  })
})
