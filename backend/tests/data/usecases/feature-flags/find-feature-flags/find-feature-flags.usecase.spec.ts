import { IFindFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { FindFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IFindFeatureFlags } from '@/domain/usecases/feature-flags'

const mockFeatureFlag: IFindFeatureFlagRepository.Result = {
  id: 'param_id',
  name: 'Feature A',
  state: true,
  description: 'param_description',
  created_at: 'date',
  updated_at: 'date'
}

const makeFindFeatureFlagRepository = (): IFindFeatureFlagRepository => {
  class FindFeatureFlagRepositoryStub implements IFindFeatureFlagRepository {
    async findFeatureFlag(id: string): Promise<IFindFeatureFlagRepository.Result> {
      return id === 'existing_id' ? mockFeatureFlag : null
    }
  }
  return new FindFeatureFlagRepositoryStub()
}

const makeSut = (): {
  sut: IFindFeatureFlags
  findFeatureFlagRepositoryStub: IFindFeatureFlagRepository
} => {
  const findFeatureFlagRepositoryStub = makeFindFeatureFlagRepository()
  const sut = new FindFeatureFlagUsecase(findFeatureFlagRepositoryStub)

  return { sut, findFeatureFlagRepositoryStub }
}

describe('FindFeatureFlagUsecase', () => {
  it('should return feature flag details on successful find', async () => {
    const { sut } = makeSut()
    const result = await sut.findFeatureFlag('existing_id')
    expect(result).toEqual(mockFeatureFlag)
  })

  it('should return a not found message if the feature flag does not exist', async () => {
    const { sut } = makeSut()
    const result = await sut.findFeatureFlag('non_existing_id')
    expect(result).toBe(MESSAGES.featureFlagNotFound('non_existing_id'))
  })
})
