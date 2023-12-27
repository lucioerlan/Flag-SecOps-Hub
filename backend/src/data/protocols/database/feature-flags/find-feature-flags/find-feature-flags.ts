import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

export namespace IFindFeatureFlagRepository {
  export type Params = {
    id: string
  }

  export type Result = string | IListFeatureFlags.FeatureFlag
}

export interface IFindFeatureFlagRepository {
  findFeatureFlag(id: string): Promise<IFindFeatureFlagRepository.Result>
}
