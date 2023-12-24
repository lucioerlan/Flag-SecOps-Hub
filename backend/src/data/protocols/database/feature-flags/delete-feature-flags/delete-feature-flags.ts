export namespace IDeleteFeatureFlagRepository {
  export type Params = {
    id: string
  }

  export type Result = string | number
}

export interface IDeleteFeatureFlagRepository {
  deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlagRepository.Result>
}
