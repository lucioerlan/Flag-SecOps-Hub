export namespace IUpdateFeatureFlag {
  export type Params = {
    id: string
    name?: string
    description?: string
    state?: boolean
  }

  export type Result = {
    id: string
    name: string
    description: string
    state: boolean
    updated_at: string
  }
}

export interface IUpdateFeatureFlag {
  updateFeatureFlag(params: IUpdateFeatureFlag.Params): Promise<IUpdateFeatureFlag.Result>
}
