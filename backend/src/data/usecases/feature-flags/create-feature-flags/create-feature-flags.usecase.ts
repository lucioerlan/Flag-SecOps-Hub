import { ICreateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MESSAGES } from '@/domain/entities'
import { ICreateFeatureFlag } from '@/domain/usecases/feature-flags'

export class CreateFeatureFlagUsecase implements ICreateFeatureFlag {
  constructor(private readonly createFeatureFlagRepository: ICreateFeatureFlagRepository) {}

  async createFeatureFlag(data: ICreateFeatureFlag.Params): Promise<ICreateFeatureFlag.Result> {
    const insertedId = await this.createFeatureFlagRepository.createFeatureFlag(data)
    return MESSAGES.createFeatureFlagSuccess(data.name, insertedId as string)
  }
}
