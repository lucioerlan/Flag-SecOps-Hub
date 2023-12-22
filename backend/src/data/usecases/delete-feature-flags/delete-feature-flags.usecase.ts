import { IDeleteFeatureFlag } from '@/domain/usecases/delete-feature-flags/delete-feature-flags'

export class DeleteFeatureFlagUsecase implements IDeleteFeatureFlag {
  async deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlag.Result> {
    return {
      message: `Feature flag ${id} deleted successfully`
    }
  }
}
