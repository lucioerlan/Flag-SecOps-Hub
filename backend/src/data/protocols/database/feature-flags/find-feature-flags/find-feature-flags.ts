export namespace IFindFeatureFlagRepository {
  export type Params = {
    id: string
  }

  export type Result = string
}

export interface IFindFeatureFlagRepository {
  findFeatureFlag(id: string): Promise<IFindFeatureFlagRepository.Result>
}
