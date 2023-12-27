import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { AuthRegisterRepository } from '@/infra/database/mongodb/repositories/auth/auth-register/auth-register.repository'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    map: jest.fn((data) => ({ ...data, id: data._id.toString() }))
  }
}))

const mockUser = {
  _id: 'any_id',
  name: 'user',
  email: 'new_user@mail.com',
  password: 'hashed_password'
}

const mockCollection = {
  insertOne: jest.fn().mockResolvedValue({ insertedId: 'any_id' }),
  findOne: jest.fn().mockResolvedValue(mockUser)
}

const sutFactory = (): { sut: AuthRegisterRepository } => {
  const sut = new AuthRegisterRepository()
  return { sut }
}

describe('AuthRegisterRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('addUser', () => {
    it('returns a unique identifier when a new user is added successfully', async () => {
      const { sut } = sutFactory()
      const userId = await sut.addUser(mockUser)
      expect(userId).toBe('any_id')
    })

    it('handles incomplete user data gracefully', async () => {
      const { sut } = sutFactory()
      const incompleteUser = { name: 'user' } as Omit<typeof mockUser, '_id'>
      mockCollection.insertOne.mockRejectedValueOnce(new Error('Incomplete data'))
      await expect(sut.addUser(incompleteUser)).rejects.toThrow('Incomplete data')
    })

    it('does not allow adding a user with duplicate email', async () => {
      const { sut } = sutFactory()
      mockCollection.insertOne.mockRejectedValueOnce(new Error('Duplicate key error'))
      await expect(sut.addUser(mockUser)).rejects.toThrow('Duplicate key error')
    })
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
