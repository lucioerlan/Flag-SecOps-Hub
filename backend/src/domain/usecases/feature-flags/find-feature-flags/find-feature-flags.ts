export namespace IFindFeatureFlags {
  export type Params = {
    id: string
  }

  export type Result = string
}

export interface IFindFeatureFlags {
  findFeatureFlag(id: string): Promise<IFindFeatureFlags.Result>
}
