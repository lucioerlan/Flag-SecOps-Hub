export namespace IListFeatureFlagsRepository {
  export type Result = Array<{
    id: string
    name: string
    description: string
    state: boolean
    created_at: string
    updated_at: string
  }>
}

export interface IListFeatureFlagsRepository {
  listFeatureFlags(): Promise<IListFeatureFlagsRepository.Result>
}
