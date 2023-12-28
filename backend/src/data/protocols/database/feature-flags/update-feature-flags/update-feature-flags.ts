import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

export namespace IUpdateFeatureFlagRepository {
  export type Params = {
    id: string
    name?: string
    description?: string
    state?: boolean
    created_at?: string
  }

  export type Result = string | IListFeatureFlags.FeatureFlag
}

export interface IUpdateFeatureFlagRepository {
  updateFeatureFlag(params: IUpdateFeatureFlagRepository.Params): Promise<IUpdateFeatureFlagRepository.Result>
}
