export namespace IListFeatureFlags {
  export type FeatureFlag = {
    id: string
    name: string
    description: string
    state: boolean
    created_at: string
    updated_at: string
  }

  export type Result = Array<FeatureFlag>
}

export interface IListFeatureFlags {
  listFeatureFlags(): Promise<IListFeatureFlags.Result>
}
