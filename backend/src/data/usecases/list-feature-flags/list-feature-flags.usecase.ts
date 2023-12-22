import { IFeatureFlags } from '@/domain/usecases/list-feature-flags/feature-flags'

export class ListFeatureFlagsUsecase implements IFeatureFlags {
  async listFeatureFlags(): Promise<object> {
    return {
      listFeatureFlags: [
        {
          name: 'feature-1',
          description: 'feature-1 description',
          enabled: true
        },
        {
          name: 'feature-2',
          description: 'feature-2 description',
          enabled: false
        }
      ]
    }
  }
}
