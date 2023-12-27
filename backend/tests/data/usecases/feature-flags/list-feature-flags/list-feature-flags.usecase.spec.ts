import { IListFeatureFlagsRepository } from '@/data/protocols/database/feature-flags'
import { ListFeatureFlagsUsecase } from '@/data/usecases/feature-flags'
import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

const mockListFeatureFlagsRepository: IListFeatureFlagsRepository.Result = [
  {
    id: 'flag1',
    name: 'Feature A',
    description: 'Description A',
    state: true,
    created_at: '2021-01-01',
    updated_at: '2021-01-01'
  },
  {
    id: 'flag2',
    name: 'Feature B',
    description: 'Description B',
    state: false,
    created_at: '2021-01-01',
    updated_at: '2021-01-01'
  }
]

const makeListFeatureFlagsRepository = (): IListFeatureFlagsRepository => {
  class ListFeatureFlagsRepositoryStub implements IListFeatureFlagsRepository {
    async listFeatureFlags(): Promise<IListFeatureFlagsRepository.Result> {
      return mockListFeatureFlagsRepository
    }
  }
  return new ListFeatureFlagsRepositoryStub()
}

const makeSut = (): {
  sut: IListFeatureFlags
  listFeatureFlagsRepositoryStub: IListFeatureFlagsRepository
} => {
  const listFeatureFlagsRepositoryStub = makeListFeatureFlagsRepository()
  const sut = new ListFeatureFlagsUsecase(listFeatureFlagsRepositoryStub)

  return { sut, listFeatureFlagsRepositoryStub }
}

describe('ListFeatureFlagsUsecase', () => {
  it('should return a list of feature flags', async () => {
    const { sut } = makeSut()
    const result = await sut.listFeatureFlags()
    expect(result.length).toBe(2)
    expect(result).toEqual(mockListFeatureFlagsRepository)
  })

  it('should return an empty list if no feature flags are found', async () => {
    const { sut, listFeatureFlagsRepositoryStub } = makeSut()
    jest.spyOn(listFeatureFlagsRepositoryStub, 'listFeatureFlags').mockResolvedValueOnce([])
    const result = await sut.listFeatureFlags()
    expect(result.length).toBe(0)
  })
})
