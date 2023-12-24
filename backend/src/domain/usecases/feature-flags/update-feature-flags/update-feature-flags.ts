export namespace IUpdateFeatureFlag {
  export type Params = {
    id: string
    name?: string
    description?: string
    state?: boolean
    created_at?: string
  }

  export type Result = string
}

export interface IUpdateFeatureFlag {
  updateFeatureFlag(params: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result>
}
