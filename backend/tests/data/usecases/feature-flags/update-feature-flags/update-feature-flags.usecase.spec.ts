import { IUpdateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { UpdateFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IUpdateFeatureFlag } from '@/domain/usecases/feature-flags'

const mockFeatureFlag: IUpdateFeatureFlagRepository.Result = {
  id: 'param_id',
  name: 'Feature A',
  state: true,
  description: 'param_description',
  created_at: 'date',
  updated_at: 'date'
}

const makeUpdateFeatureFlagRepository = (): IUpdateFeatureFlagRepository => {
  class UpdateFeatureFlagRepositoryStub implements IUpdateFeatureFlagRepository {
    async updateFeatureFlag(): Promise<IUpdateFeatureFlagRepository.Result> {
      return mockFeatureFlag || null
    }
  }
  return new UpdateFeatureFlagRepositoryStub()
}

const sutFactory = (): {
  sut: IUpdateFeatureFlag
  updateFeatureFlagRepositoryStub: IUpdateFeatureFlagRepository
} => {
  const updateFeatureFlagRepositoryStub = makeUpdateFeatureFlagRepository()
  const sut = new UpdateFeatureFlagUsecase(updateFeatureFlagRepositoryStub)

  return { sut, updateFeatureFlagRepositoryStub }
}

describe('UpdateFeatureFlagUsecase', () => {
  it('should successfully update the feature flag and return the updated data', async () => {
    const { sut } = sutFactory()
    const result = await sut.updateFeatureFlag(mockFeatureFlag)
    expect(result).toEqual(mockFeatureFlag)
  })

  it('should return a not found message if the feature flag does not exist', async () => {
    const { sut, updateFeatureFlagRepositoryStub } = sutFactory()
    jest.spyOn(updateFeatureFlagRepositoryStub, 'updateFeatureFlag').mockResolvedValueOnce(null)

    const result = await sut.updateFeatureFlag(mockFeatureFlag)
    expect(result).toBe(MESSAGES.featureFlagNotFound(mockFeatureFlag.id))
  })
})
