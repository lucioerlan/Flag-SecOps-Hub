import { ICreateFeatureFlag } from '@/domain/usecases/feature-flags'
import { CreateFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Request } from '@/presentation/protocols'

const makeCreateFeatureFlagUsecase = (): ICreateFeatureFlag => {
  class CreateFeatureFlagUsecaseStub implements ICreateFeatureFlag {
    async createFeatureFlag(): Promise<ICreateFeatureFlag.Result> {
      return 'created_feature_flag_id'
    }
  }
  return new CreateFeatureFlagUsecaseStub()
}

const sutFactory = (): { sut: CreateFeatureFlagController; createFeatureFlagUsecaseStub: ICreateFeatureFlag } => {
  const createFeatureFlagUsecaseStub = makeCreateFeatureFlagUsecase()
  const sut = new CreateFeatureFlagController(createFeatureFlagUsecaseStub)
  return { sut, createFeatureFlagUsecaseStub }
}

describe('CreateFeatureFlagController', () => {
  it('should return 200 and a success message on successful feature flag creation', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      body: {
        name: 'New Feature',
        description: 'Description of new feature',
        state: true
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual('created_feature_flag_id')
  })

  it('should return 500 if CreateFeatureFlagUsecase throws', async () => {
    const { sut, createFeatureFlagUsecaseStub } = sutFactory()
    jest.spyOn(createFeatureFlagUsecaseStub, 'createFeatureFlag').mockImplementationOnce(async () => {
      throw new Error()
    })

    const httpRequest = {
      body: {
        name: 'New Feature',
        description: 'Description of new feature',
        state: true
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
