export namespace IDeleteFeatureFlag {
  export type Params = {
    id: string
  }

  export type Result = string | number
}

export interface IDeleteFeatureFlag {
  deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlag.Result>
}
