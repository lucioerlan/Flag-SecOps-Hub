import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { DeleteFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    toObjectId: jest.fn((id) => id)
  }
}))

const mockCollection = {
  deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 })
}

const sutFactory = (): { sut: DeleteFeatureFlagRepository } => {
  const sut = new DeleteFeatureFlagRepository()
  return { sut }
}

describe('DeleteFeatureFlagRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('deleteFeatureFlag', () => {
    it('successfully deletes a feature flag and returns the deleted count', async () => {
      const { sut } = sutFactory()
      const deletedCount = await sut.deleteFeatureFlag('param_id')
      expect(deletedCount).toBe(1)
    })

    it('returns 0 when no feature flag is found to delete', async () => {
      const { sut } = sutFactory()
      mockCollection.deleteOne.mockResolvedValueOnce({ deletedCount: 0 })
      const deletedCount = await sut.deleteFeatureFlag('nonexistent_id')
      expect(deletedCount).toBe(0)
    })

    it('handles errors thrown during the deletion of a feature flag', async () => {
      const { sut } = sutFactory()
      mockCollection.deleteOne.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.deleteFeatureFlag('param_id')).rejects.toThrow('DB error')
    })
  })
})
