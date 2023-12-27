import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

export namespace IFindFeatureFlags {
  export type Params = {
    id: string
  }

  export type Result = string | IListFeatureFlags.FeatureFlag
}

export interface IFindFeatureFlags {
  findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result>
}
