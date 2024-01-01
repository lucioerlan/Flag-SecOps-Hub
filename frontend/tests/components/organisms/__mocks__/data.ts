export const tableData = [
  {
    id: '1',
    name: 'Feature 1',
    description: 'Description 1',
    state: true,
    created_at: '2022-01-01',
    updated_at: '2022-01-01'
  },
  {
    id: '2',
    name: 'Feature 2',
    description: 'Description 2',
    state: false,
    created_at: '2022-01-02',
    updated_at: '2022-01-02'
  }
]

export const tableColumns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Description', accessor: 'description' },
  { header: 'State', accessor: 'state' }
] as {
  header: string
  accessor: keyof (typeof tableData)[0]
}[]
