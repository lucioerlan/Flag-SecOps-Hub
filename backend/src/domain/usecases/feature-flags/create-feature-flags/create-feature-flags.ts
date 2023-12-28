export namespace ICreateFeatureFlag {
  export type Params = {
    name: string
    description: string
    state: boolean
  }

  export type Result = string | null
}

export interface ICreateFeatureFlag {
  createFeatureFlag(params: ICreateFeatureFlag.Params): Promise<string>
}
