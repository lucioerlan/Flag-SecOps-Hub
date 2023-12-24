export namespace ICreateFeatureFlag {
  export type Params = {
    name: string
    description: string
    state: boolean
  }

  export type Result = string
}

export interface ICreateFeatureFlag {
  createFeatureFlag(params: ICreateFeatureFlag.Params): Promise<ICreateFeatureFlag.Result>
}
