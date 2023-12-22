export namespace IDeleteFeatureFlag {
  export type Params = {
    id: string
  }

  export type Result = {
    message: string
  }
}

export interface IDeleteFeatureFlag {
  deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlag.Result>
}
