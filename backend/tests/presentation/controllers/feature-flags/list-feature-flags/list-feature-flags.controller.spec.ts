import { IListFeatureFlags } from '@/domain/usecases/feature-flags'
import { ListFeatureFlagsController } from '@/presentation/controllers/feature-flags'

const mockListFeatureFlags: IListFeatureFlags.Result = [
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

const makeListFeatureFlagsUsecaseStub = (): IListFeatureFlags => {
  class ListFeatureFlagsUsecaseStub implements IListFeatureFlags {
    async listFeatureFlags(): Promise<IListFeatureFlags.Result> {
      return mockListFeatureFlags
    }
  }
  return new ListFeatureFlagsUsecaseStub()
}

const sutFactory = (): { sut: ListFeatureFlagsController; listFeatureFlagsUsecaseStub: IListFeatureFlags } => {
  const listFeatureFlagsUsecaseStub = makeListFeatureFlagsUsecaseStub()
  const sut = new ListFeatureFlagsController(listFeatureFlagsUsecaseStub)
  return { sut, listFeatureFlagsUsecaseStub }
}

describe('ListFeatureFlagsController', () => {
  it('should return 200 and a list of feature flags on successful retrieval', async () => {
    const { sut } = sutFactory()
    const httpResponse = await sut.handle()

    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toBeInstanceOf(Array)
    expect(httpResponse.body).toHaveLength(2)
  })

  it('should return 500 if ListFeatureFlagsUsecase throws', async () => {
    const { sut, listFeatureFlagsUsecaseStub } = sutFactory()
    jest.spyOn(listFeatureFlagsUsecaseStub, 'listFeatureFlags').mockImplementationOnce(async () => {
      throw new Error()
    })

    const httpResponse = await sut.handle()
    expect(httpResponse.statusCode).toBe(500)
  })
})
