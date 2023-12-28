import { IListFeatureFlags } from '@/domain/usecases/feature-flags'

export namespace IUpdateFeatureFlag {
  export type Params = {
    id: string
    name?: string
    description?: string
    state?: boolean
    created_at?: string
  }

  export type Result = string | IListFeatureFlags.FeatureFlag
}

export interface IUpdateFeatureFlag {
  updateFeatureFlag(params: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result>
}
