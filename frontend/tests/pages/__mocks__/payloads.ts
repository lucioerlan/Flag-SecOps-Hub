export const mockCardsFeatureFlags = () => [
  {
    title: 'Total de Feature Flags',
    value: 1,
    description: 'Quantidade total de feature flags criadas'
  },
  {
    title: 'Feature Flags Ativas',
    value: 1,
    description: 'Quantas feature flags estão atualmente ativas'
  },
  {
    title: 'Feature Flags Desativadas',
    value: 0,
    description: 'Quantas feature flags estão atualmente desativadas'
  },
  {
    title: 'Feature Flags em Beta',
    value: 0,
    description: 'Quantas feature flags estão em beta'
  }
]

export const mockTableManager = () => ({
  data: [
    {
      id: '658d2c70ea7e5f07783ff5ba',
      name: 'teste',
      description: 'teste',
      state: true,
      created_at: '28/12/2023',
      updated_at: '28/12/2023'
    }
  ],
  columns: [
    {
      header: 'Nome',
      accessor: 'name'
    },
    {
      header: 'Descrição',
      accessor: 'description'
    },
    {
      header: 'Status',
      accessor: 'state'
    },
    {
      header: 'Criado Em',
      accessor: 'created_at'
    },
    {
      header: 'Atualizado Em',
      accessor: 'updated_at'
    }
  ],
  itemsPerPage: 25,
  currentPage: 1,
  totalItems: 1
})
