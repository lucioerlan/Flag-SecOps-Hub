import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { CreateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    map: jest.fn((data) => ({ ...data, id: data._id.toString() }))
  }
}))

const mockFeatureFlag = {
  name: 'param_name',
  description: 'param_description',
  state: true
}

const mockCollection = {
  insertOne: jest.fn().mockResolvedValue({ insertedId: 'param_id' })
}

const sutFactory = (): { sut: CreateFeatureFlagRepository } => {
  const sut = new CreateFeatureFlagRepository()
  return { sut }
}

describe('CreateFeatureFlagRepository', () => {
  const fixedDate = new Date('2023-01-01T00:00:00Z')
  let dateSpy: jest.SpyInstance

  beforeAll(() => {
    dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => fixedDate)
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  afterAll(() => {
    dateSpy.mockRestore()
  })

  describe('createFeatureFlag', () => {
    it('successfully creates a feature flag and returns its id', async () => {
      const { sut } = sutFactory()
      const featureFlagId = await sut.createFeatureFlag(mockFeatureFlag)
      expect(featureFlagId).toBe('param_id')
    })

    it('properly assigns timestamps on feature flag creation', async () => {
      const { sut } = sutFactory()
      await sut.createFeatureFlag(mockFeatureFlag)
      const passedData = mockCollection.insertOne.mock.calls[0][0]
      expect(passedData.created_at).toEqual(fixedDate)
      expect(passedData.updated_at).toEqual(fixedDate)
    })

    it('handles errors thrown during the creation of a feature flag', async () => {
      const { sut } = sutFactory()
      mockCollection.insertOne.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.createFeatureFlag(mockFeatureFlag)).rejects.toThrow('DB error')
    })
  })
})
