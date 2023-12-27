export type Column<T> = {
  header: string
  accessor: keyof T
}

export const capitalize = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1)
export const createFormattedHeaders = <T extends Record<string, unknown>>(
  data: T[],
  columnNames: Partial<Record<keyof T, string>>,
  formatFunction: (word: string) => string
): Column<T>[] => {
  if (data.length === 0) return []
  const sampleItem = data[0]

  return Object.keys(sampleItem)
    .filter((key) => key !== 'id')
    .map((key) => {
      const accessor = key as keyof T
      const headerName =
        accessor in columnNames && columnNames[accessor]
          ? columnNames[accessor]!
          : key.split('_').map(formatFunction).join(' ')
      return {
        header: headerName,
        accessor: accessor
      }
    })
}
