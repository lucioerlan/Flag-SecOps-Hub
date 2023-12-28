export type RequestCreateFeatureFlag = {
  name: string
  description: string
  state: boolean
}

export type FeatureFlag = {
  id: string
  name: string
  description: string
  state: boolean
  created_at: string
  updated_at: string
}

export type RequestUpdateFeatureFlag = object
export type BodyFeatureFlags = {
  featureFlags: {
    body: FeatureFlag[]
  }
}

export type ColumnTable = {
  header: string
  accessor: keyof FeatureFlag
}

export type TableData = {
  data: FeatureFlag[]
  columns: ColumnTable[]
  handleSearch: (search: string) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  totalItems: number
}
