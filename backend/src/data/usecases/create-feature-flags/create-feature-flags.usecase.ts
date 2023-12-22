import { ICreateFeatureFlag } from '@/domain/usecases/create-feature-flags/create-feature-flags'

export class CreateFeatureFlagUsecase implements ICreateFeatureFlag {
  async createFeatureFlag(data: ICreateFeatureFlag.Params): Promise<ICreateFeatureFlag.Result> {
    const newFeatureFlag = {
      id: Math.floor(Math.random() * 10000).toString(),
      name: data.name,
      description: data.description,
      state: data.state,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return newFeatureFlag
  }
}
