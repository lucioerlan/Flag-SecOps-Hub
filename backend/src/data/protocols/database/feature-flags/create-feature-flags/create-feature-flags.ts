export namespace ICreateFeatureFlagRepository {
  export type Params = {
    name: string
    description: string
    state: boolean
  }

  export type Result = string | number
}

export interface ICreateFeatureFlagRepository {
  createFeatureFlag(params: ICreateFeatureFlagRepository.Params): Promise<ICreateFeatureFlagRepository.Result>
}
