import { BcryptCryptography } from '@/infra/cryptography/bcrypt/bcrypt.cryptography'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn()
}))

const salt = 12
const sutFactory = () => {
  const sut: BcryptCryptography = new BcryptCryptography(salt)
  return { sut }
}

describe('BcryptCryptography', () => {
  describe('hash', () => {
    it('should call hash with correct values', async () => {
      const { sut } = sutFactory()
      const hashSpy = jest.spyOn(bcrypt, 'hash')
      const plaintext = 'any_value'
      await sut.hash(plaintext)

      expect(hashSpy).toHaveBeenCalledWith(plaintext, salt)
    })

    it('should return a valid hash on hash success', async () => {
      const { sut } = sutFactory()
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => 'hash')
      const hash = await sut.hash('any_value')

      expect(hash).toBe('hash')
    })

    it('should throw if hash throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.hash('any_value')

      await expect(promise).rejects.toThrow()
    })
  })

  describe('compare', () => {
    it('should call compare with correct values', async () => {
      const { sut } = sutFactory()
      const compareSpy = jest.spyOn(bcrypt, 'compare')
      await sut.compare('any_value', 'any_hash')

      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash')
    })

    it('should return true when comparison succeeds', async () => {
      const { sut } = sutFactory()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => true)
      const isValid = await sut.compare('any_value', 'any_hash')

      expect(isValid).toBe(true)
    })

    it('should return false when comparison fails', async () => {
      const { sut } = sutFactory()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => false)
      const isValid = await sut.compare('any_value', 'any_hash')

      expect(isValid).toBe(false)
    })

    it('should throw if compare throws', async () => {
      const { sut } = sutFactory()
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => {
        throw new Error()
      })
      const promise = sut.compare('any_value', 'any_hash')

      await expect(promise).rejects.toThrow()
    })
  })
})
