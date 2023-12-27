import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { AuthLoginRepository } from '@/infra/database/mongodb/repositories/auth/auth-login/auth-login.repository'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    map: jest.fn((data) => ({ ...data, id: data._id.toString() }))
  }
}))

const mockUser = {
  _id: 'any_id',
  name: 'user',
  email: 'user@mail.com',
  password: 'hashed_password'
}

const mockCollection = {
  findOne: jest.fn().mockResolvedValue(mockUser)
}

const sutFactory = (): { sut: AuthLoginRepository } => {
  const sut = new AuthLoginRepository()
  return { sut }
}

describe('AuthLoginRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('findUserByEmail', () => {
    it('retrieves user details based on email if user exists', async () => {
      const { sut } = sutFactory()
      const user = await sut.findUserByEmail(mockUser.email)
      expect(user).toEqual(MongoHelper.map(mockUser))
    })

    it('returns null if no user is found with the provided email', async () => {
      const { sut } = sutFactory()
      mockCollection.findOne.mockResolvedValueOnce(null)
      const user = await sut.findUserByEmail('nonexistent_user@mail.com')
      expect(user).toBeNull()
    })

    it('handles database errors gracefully', async () => {
      const { sut } = sutFactory()
      mockCollection.findOne.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.findUserByEmail('valid_user@mail.com')).rejects.toThrow('DB error')
    })
  })
})
