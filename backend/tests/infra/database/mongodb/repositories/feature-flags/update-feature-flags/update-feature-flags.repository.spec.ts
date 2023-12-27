import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'
import { UpdateFeatureFlagRepository } from '@/infra/database/mongodb/repositories/feature-flags/update-feature-flags/update-feature-flags.repository'

jest.mock('@/infra/database/mongodb/helper/mongodb.helper', () => ({
  MongoHelper: {
    getCollection: jest.fn(),
    map: jest.fn((data) => ({ ...data, id: data.value._id.toString() })),
    toObjectId: jest.fn((id) => id)
  }
}))

const mockFeatureFlag = {
  name: 'any_name',
  description: 'any_description',
  state: true
}

const updatedFeatureFlag = {
  ...mockFeatureFlag,
  _id: 'any_id',
  name: 'updated_name'
}

const mockCollection = {
  findOneAndUpdate: jest.fn().mockResolvedValue({ value: updatedFeatureFlag })
}

const sutFactory = (): { sut: UpdateFeatureFlagRepository } => {
  const sut = new UpdateFeatureFlagRepository()
  return { sut }
}

describe('UpdateFeatureFlagRepository', () => {
  beforeAll(() => {
    ;(MongoHelper.getCollection as jest.Mock).mockReturnValue(mockCollection)
  })

  describe('updateFeatureFlag', () => {
    it('successfully updates a feature flag and returns the updated document', async () => {
      const { sut } = sutFactory()
      const result = await sut.updateFeatureFlag({ id: 'any_id', ...mockFeatureFlag })
      expect(result).toEqual(MongoHelper.map({ value: updatedFeatureFlag }))
    })

    it('handles errors thrown during the update of a feature flag', async () => {
      const { sut } = sutFactory()
      mockCollection.findOneAndUpdate.mockRejectedValueOnce(new Error('DB error'))
      await expect(sut.updateFeatureFlag({ id: 'any_id', ...mockFeatureFlag })).rejects.toThrow('DB error')
    })
  })
})
