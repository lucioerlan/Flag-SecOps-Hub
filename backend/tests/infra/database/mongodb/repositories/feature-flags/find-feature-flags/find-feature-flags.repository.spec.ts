import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { FindFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    map: jest.fn((data) => ({ ...data, id: data._id.toString() })),
    toObjectId: jest.fn((id) => id)
  }
}))

const mockFeatureFlag = {
  _id: 'param_id',
  name: 'param_name',
  description: 'param_description',
  state: true,
  created_at: new Date(),
  updated_at: new Date()
}

const mockCollection = {
  findOne: jest.fn().mockResolvedValue(mockFeatureFlag)
}

const sutFactory = (): { sut: FindFeatureFlagRepository } => {
  const sut = new FindFeatureFlagRepository()
  return { sut }
}

describe('FindFeatureFlagRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('findFeatureFlag', () => {
    it('successfully retrieves a feature flag and returns mapped data', async () => {
      const { sut } = sutFactory()
      const featureFlag = await sut.findFeatureFlag('param_id')
      expect(featureFlag).toEqual(MongoHelper.map(mockFeatureFlag))
    })

    it('returns null when no feature flag is found with the provided id', async () => {
      const { sut } = sutFactory()
      mockCollection.findOne.mockResolvedValueOnce(null)
      const featureFlag = await sut.findFeatureFlag('nonexistent_id')
      expect(featureFlag).toBeNull()
    })

    it('handles errors thrown during the retrieval of a feature flag', async () => {
      const { sut } = sutFactory()
      mockCollection.findOne.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.findFeatureFlag('param_id')).rejects.toThrow('DB error')
    })
  })
})
