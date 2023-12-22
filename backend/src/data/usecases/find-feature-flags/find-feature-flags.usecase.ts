import { IFindFeatureFlags } from '@/domain/usecases/find-feature-flags/find-feature-flags'

export class FindFeatureFlagUsecase implements IFindFeatureFlags {
  async findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result> {
    const featureFlags = [
      {
        id: '1',
        name: 'feature-flag-1',
        description: 'This is the first feature flag',
        state: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      {
        id: '2',
        name: 'feature-flag-2',
        description: 'This is the second feature flag',
        state: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    ]

    const featureFlagFound = featureFlags.find((feature) => feature.id === id)

    return featureFlagFound || null
  }
}
