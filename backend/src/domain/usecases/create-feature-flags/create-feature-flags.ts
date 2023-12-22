export namespace ICreateFeatureFlag {
  export type Params = {
    name: string
    description: string
    state: boolean
  }

  export type Result = {
    id: string
    name: string
    description: string
    state: boolean
    created_at: string
    updated_at: string
  }
}

export interface ICreateFeatureFlag {
  createFeatureFlag(params: ICreateFeatureFlag.Params): Promise<ICreateFeatureFlag.Result>
}
