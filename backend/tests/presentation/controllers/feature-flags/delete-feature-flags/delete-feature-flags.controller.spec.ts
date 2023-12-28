import { MESSAGES } from '@/domain/entities'
import { IDeleteFeatureFlag } from '@/domain/usecases/feature-flags'
import { DeleteFeatureFlagController } from '@/presentation/controllers/feature-flags'
import { Request } from '@/presentation/protocols'

const makeDeleteFeatureFlagUsecase = (): IDeleteFeatureFlag => {
  class DeleteFeatureFlagUsecaseStub implements IDeleteFeatureFlag {
    async deleteFeatureFlag(id: string): Promise<number> {
      return id === 'valid_id' ? 1 : 0
    }
  }
  return new DeleteFeatureFlagUsecaseStub()
}

const sutFactory = (): { sut: DeleteFeatureFlagController; deleteFeatureFlagUsecaseStub: IDeleteFeatureFlag } => {
  const deleteFeatureFlagUsecaseStub = makeDeleteFeatureFlagUsecase()
  const sut = new DeleteFeatureFlagController(deleteFeatureFlagUsecaseStub)
  return { sut, deleteFeatureFlagUsecaseStub }
}

describe('DeleteFeatureFlagController', () => {
  it('should return 200 and a success message on successful feature flag deletion', async () => {
    const { sut } = sutFactory()
    const httpRequest = {
      params: {
        id: 'valid_id'
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(1)
  })

  it('should return 404 if no feature flag is found', async () => {
    const { sut, deleteFeatureFlagUsecaseStub } = sutFactory()
    const httpRequest = {
      params: { id: 'non_existing_id' }
    } as Request

    jest
      .spyOn(deleteFeatureFlagUsecaseStub, 'deleteFeatureFlag')
      .mockImplementationOnce(async () => 'Feature flag with id non_existing_id not found')

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(404)
    expect(httpResponse.body).toEqual(MESSAGES.featureFlagNotFound('non_existing_id'))
  })

  it('should return 500 if DeleteFeatureFlagUsecase throws', async () => {
    const { sut, deleteFeatureFlagUsecaseStub } = sutFactory()
    jest.spyOn(deleteFeatureFlagUsecaseStub, 'deleteFeatureFlag').mockImplementationOnce(async () => {
      throw new Error()
    })

    const httpRequest = {
      params: {
        id: 'valid_id'
      }
    } as Request

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
