import { ICreateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { CreateFeatureFlagUsecase } from '@/data/usecases/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { ICreateFeatureFlag } from '@/domain/usecases/feature-flags'

const makeCreateFeatureFlagRepository = (): ICreateFeatureFlagRepository => {
  class CreateFeatureFlagRepositoryStub implements ICreateFeatureFlagRepository {
    async createFeatureFlag(): Promise<string> {
      return 'valid_id'
    }
  }
  return new CreateFeatureFlagRepositoryStub()
}

const sutFactory = (): {
  sut: ICreateFeatureFlag
  createFeatureFlagRepositoryStub: ICreateFeatureFlagRepository
} => {
  const createFeatureFlagRepositoryStub = makeCreateFeatureFlagRepository()
  const sut = new CreateFeatureFlagUsecase(createFeatureFlagRepositoryStub)

  return { sut, createFeatureFlagRepositoryStub }
}

describe('CreateFeatureFlagUsecase', () => {
  it('should return a success message on successful feature flag creation', async () => {
    const { sut } = sutFactory()
    const featureFlagData = {
      name: 'Feature A',
      description: 'Description A',
      state: true
    }

    const result = await sut.createFeatureFlag(featureFlagData)
    expect(result).toBe(MESSAGES.createFeatureFlagSuccess(featureFlagData.name, 'valid_id'))
  })
})
