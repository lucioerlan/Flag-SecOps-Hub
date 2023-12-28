import { MESSAGES } from '@/domain/entities'
import { IUpdateFeatureFlag } from '@/domain/usecases/feature-flags'
import { UpdateFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Request } from '@/presentation/protocols'

const makeUpdateFeatureFlagUsecaseStub = (): IUpdateFeatureFlag => {
  class UpdateFeatureFlagUsecaseStub implements IUpdateFeatureFlag {
    async updateFeatureFlag(data: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result> {
      if (data.id === 'existing_id') {
        return { ...data, updated: true } as unknown as IUpdateFeatureFlag.Result
      } else {
        return MESSAGES.featureFlagNotFound(data.id)
      }
    }
  }

  return new UpdateFeatureFlagUsecaseStub()
}

const sutFactory = (): { sut: UpdateFeatureFlagController; updateFeatureFlagUsecaseStub: IUpdateFeatureFlag } => {
  const updateFeatureFlagUsecaseStub = makeUpdateFeatureFlagUsecaseStub()
  const sut = new UpdateFeatureFlagController(updateFeatureFlagUsecaseStub)
  return { sut, updateFeatureFlagUsecaseStub }
}

describe('UpdateFeatureFlagController', () => {
  it('should return 200 and the updated feature flag on successful update', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      body: { name: 'Updated Feature', description: 'Updated description', state: true },
      params: { id: 'existing_id' }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body.updated).toBe(true)
  })

  it('should return 404 if the feature flag does not exist', async () => {
    const { sut, updateFeatureFlagUsecaseStub } = sutFactory()
    jest
      .spyOn(updateFeatureFlagUsecaseStub, 'updateFeatureFlag')
      .mockResolvedValueOnce(MESSAGES.featureFlagNotFound('non_existing_id'))

    const httpRequest = {
      body: { name: 'Non-existing Feature', description: 'No description', state: false },
      params: { id: 'non_existing_id' }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(404)
    expect(httpResponse.body).toEqual(MESSAGES.featureFlagNotFound('non_existing_id'))
  })

  it('should return 500 if UpdateFeatureFlagUsecase throws', async () => {
    const { sut, updateFeatureFlagUsecaseStub } = sutFactory()
    jest.spyOn(updateFeatureFlagUsecaseStub, 'updateFeatureFlag').mockImplementationOnce(async () => {
      throw new Error()
    })

    const httpRequest = {
      body: { name: 'Any Feature', description: 'Any description', state: false },
      params: { id: 'any_id' }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
