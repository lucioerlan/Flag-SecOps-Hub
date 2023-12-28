import { MESSAGES } from '@/domain/entities'
import { IFindFeatureFlags } from '@/domain/usecases/feature-flags'
import { FindFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Request } from '@/presentation/protocols'

const mockFindFeatureFlags: IFindFeatureFlags.Result = {
  id: 'flag1',
  name: 'Feature A',
  description: 'Description A',
  state: true,
  created_at: '2021-01-01',
  updated_at: '2021-01-01'
}

const makeFindFeatureFlagUsecase = (): IFindFeatureFlags => {
  class FindFeatureFlagUsecaseStub implements IFindFeatureFlags {
    async findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result> {
      return id === 'existing_id' ? mockFindFeatureFlags : null
    }
  }
  return new FindFeatureFlagUsecaseStub()
}

const sutFactory = (): { sut: FindFeatureFlagController; findFeatureFlagUsecaseStub: IFindFeatureFlags } => {
  const findFeatureFlagUsecaseStub = makeFindFeatureFlagUsecase()
  const sut = new FindFeatureFlagController(findFeatureFlagUsecaseStub)
  return { sut, findFeatureFlagUsecaseStub }
}

describe('FindFeatureFlagController', () => {
  it('should return 200 and the feature flag details on successful find', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      params: {
        id: 'existing_id'
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(mockFindFeatureFlags)
  })

  it('should return 404 if the feature flag does not exist', async () => {
    const { sut, findFeatureFlagUsecaseStub } = sutFactory()
    const httpRequest = {
      params: {
        id: 'non_existing_id'
      }
    } as Request

    jest
      .spyOn(findFeatureFlagUsecaseStub, 'findFeatureFlag')
      .mockImplementationOnce(async () => 'Feature flag with id non_existing_id not found')

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(404)
    expect(httpResponse.body).toEqual(MESSAGES.featureFlagNotFound('non_existing_id'))
  })

  it('should return 500 if FindFeatureFlagUsecase throws', async () => {
    const { sut, findFeatureFlagUsecaseStub } = sutFactory()
    jest.spyOn(findFeatureFlagUsecaseStub, 'findFeatureFlag').mockImplementationOnce(async () => {
      throw new Error()
    })
    const httpRequest = {
      params: {
        id: 'any_id'
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
