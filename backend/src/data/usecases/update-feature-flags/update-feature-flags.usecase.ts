import { IUpdateFeatureFlag } from '@/domain/usecases/update-feature-flags/update-feature-flags'

export class UpdateFeatureFlagUsecase implements IUpdateFeatureFlag {
  async updateFeatureFlag(data: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result> {
    const updatedFeatureFlag = {
      id: data.id,
      name: data.name,
      description: data.description,
      state: data.state,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return {
      id: updatedFeatureFlag.id,
      name: updatedFeatureFlag.name,
      description: updatedFeatureFlag.description,
      state: updatedFeatureFlag.state,
      updated_at: new Date().toISOString()
    }
  }
}
