export namespace IFindFeatureFlags {
  export type Params = {
    id: string
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

export interface IFindFeatureFlags {
  findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result>
}
