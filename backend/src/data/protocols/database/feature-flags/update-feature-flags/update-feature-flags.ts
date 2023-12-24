export namespace IUpdateFeatureFlagRepository {
  export type Params = {
    id: string
    name?: string
    description?: string
    state?: boolean
    created_at?: string
  }

  export type Result = string
}

export interface IUpdateFeatureFlagRepository {
  updateFeatureFlag(params: IUpdateFeatureFlagRepository.Params): Promise<IUpdateFeatureFlagRepository.Result>
}
