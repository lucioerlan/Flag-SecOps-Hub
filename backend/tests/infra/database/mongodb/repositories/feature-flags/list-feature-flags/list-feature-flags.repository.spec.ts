import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { ListFeatureFlagsRepository } from '@/infra/database/mongodb/repositories/feature-flags'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    mapCollection: jest.fn((data) => data.map((d) => ({ ...d, id: d._id.toString() })))
  }
}))

const mockFeatureFlags = [
  {
    _id: 'id1',
    name: 'feature1',
    description: 'description1',
    state: true,
    created_at: new Date(),
    updated_at: new Date()
  }
]

const mockCollection = {
  find: jest.fn().mockReturnValue({
    toArray: jest.fn().mockResolvedValue(mockFeatureFlags)
  })
}

const sutFactory = (): { sut: ListFeatureFlagsRepository } => {
  const sut = new ListFeatureFlagsRepository()
  return { sut }
}

describe('ListFeatureFlagsRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('listFeatureFlags', () => {
    it('successfully retrieves and maps feature flags', async () => {
      const { sut } = sutFactory()
      const featureFlags = await sut.listFeatureFlags()
      expect(featureFlags).toEqual(MongoHelper.mapCollection(mockFeatureFlags))
    })

    it('handles an empty collection gracefully', async () => {
      const { sut } = sutFactory()
      mockCollection.find().toArray.mockResolvedValueOnce([])
      const featureFlags = await sut.listFeatureFlags()
      expect(featureFlags).toEqual([])
    })

    it('handles database errors during retrieval', async () => {
      const { sut } = sutFactory()
      mockCollection.find().toArray.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.listFeatureFlags()).rejects.toThrow('DB error')
    })
  })
})
