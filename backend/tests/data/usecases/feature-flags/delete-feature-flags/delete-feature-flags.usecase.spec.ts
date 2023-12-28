import { IDeleteFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { DeleteFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { IDeleteFeatureFlag } from '@/domain/usecases/feature-flags'

const makeDeleteFeatureFlagRepository = (): IDeleteFeatureFlagRepository => {
  class DeleteFeatureFlagRepositoryStub implements IDeleteFeatureFlagRepository {
    async deleteFeatureFlag(id: string): Promise<number> {
      return id === 'existing_id' ? 1 : 0
    }
  }
  return new DeleteFeatureFlagRepositoryStub()
}

const sutFactory = (): {
  sut: IDeleteFeatureFlag
  deleteFeatureFlagRepositoryStub: IDeleteFeatureFlagRepository
} => {
  const deleteFeatureFlagRepositoryStub = makeDeleteFeatureFlagRepository()
  const sut = new DeleteFeatureFlagUsecase(deleteFeatureFlagRepositoryStub)

  return { sut, deleteFeatureFlagRepositoryStub }
}

describe('DeleteFeatureFlagUsecase', () => {
  it('should return a success message on successful feature flag deletion', async () => {
    const { sut } = sutFactory()
    const result = await sut.deleteFeatureFlag('existing_id')
    expect(result).toBe(MESSAGES.deleteFeatureFlagSuccess('existing_id'))
  })

  it('should return a not found message if the feature flag does not exist', async () => {
    const { sut } = sutFactory()
    const result = await sut.deleteFeatureFlag('non_existing_id')
    expect(result).toBe(MESSAGES.featureFlagNotFound('non_existing_id'))
  })
})
