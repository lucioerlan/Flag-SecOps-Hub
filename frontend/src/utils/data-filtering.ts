export const filterDataByQuery = <T extends { name?: string; description?: string }>(query: string, data: T[]): T[] => {
  if (!query.trim()) return data

  const lowerCaseQuery = query.toLowerCase()
  return data.filter(
    (item) =>
      item.name?.toLowerCase().includes(lowerCaseQuery) || item.description?.toLowerCase().includes(lowerCaseQuery)
  )
}

export const paginateData = <T>(data: T[], currentPage: number, itemsPerPage: number): T[] => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return data.slice(startIndex, endIndex)
}
