import { filterDataByQuery, paginateData } from '@/utils/dataFilteringUtils'

describe('filterDataByQuery', () => {
  const data = [
    { name: 'Feature One', description: 'The first feature' },
    { name: 'Second Feature', description: 'Feature description here' }
  ]

  it('should filter data by name query', () => {
    const filtered = filterDataByQuery('Feature', data)
    expect(filtered).toHaveLength(2)
  })

  it('should filter data by description query', () => {
    const filtered = filterDataByQuery('first', data)
    expect(filtered).toHaveLength(1)
  })

  it('should return all data when query is empty', () => {
    const filtered = filterDataByQuery('', data)
    expect(filtered).toHaveLength(2)
  })
})

describe('paginateData', () => {
  const data = Array.from({ length: 50 }, (_, i) => ({ id: i + 1 }))

  it('should return the correct page of data', () => {
    const pageData = paginateData(data, 2, 10)
    expect(pageData).toEqual(data.slice(10, 20))
    expect(pageData).toHaveLength(10)
  })

  it('should handle empty data input', () => {
    const pageData = paginateData([], 1, 10)
    expect(pageData).toEqual([])
  })

  it('should return the correct items for the last page', () => {
    const pageData = paginateData(data, 5, 10)
    expect(pageData).toEqual(data.slice(40))
    expect(pageData).toHaveLength(10)
  })
})
