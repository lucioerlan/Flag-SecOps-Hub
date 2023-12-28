import { capitalize, createFormattedHeaders } from '@/utils'

describe('capitalize', () => {
  it('should capitalize the first letter of the word', () => {
    const word = 'hello'
    expect(capitalize(word)).toBe('Hello')
  })

  it('should handle an empty string', () => {
    const word = ''
    expect(capitalize(word)).toBe('')
  })

  it('should handle a single letter', () => {
    const word = 'h'
    expect(capitalize(word)).toBe('H')
  })

  it('should handle a string with only spaces', () => {
    const word = '   '
    expect(capitalize(word)).toBe('   ')
  })

  it('should handle a string with only special characters', () => {
    const word = '?!@#$%^&*()'
    expect(capitalize(word)).toBe('?!@#$%^&*()')
  })

  it('should capitalize the first letter of every word in a sentence', () => {
    const sentence = 'hello world'
    expect(capitalize(sentence)).toBe('Hello world')
  })
})

describe('createFormattedHeaders', () => {
  const mockData = [
    { id: 1, first_name: 'John', last_name: 'Doe' },
    { id: 2, first_name: 'Jane', last_name: 'Doe' }
  ]

  const columnNames = {
    first_name: 'First Name',
    last_name: 'Last Name'
  }

  it('should create formatted headers from data and column names', () => {
    const headers = createFormattedHeaders(mockData, columnNames, capitalize)
    expect(headers).toEqual([
      { header: 'First Name', accessor: 'first_name' },
      { header: 'Last Name', accessor: 'last_name' }
    ])
  })

  it('should return an empty array when data is empty', () => {
    const headers = createFormattedHeaders([], columnNames, capitalize)
    expect(headers).toEqual([])
  })

  it('should use default formatting when column name is not specified', () => {
    const headers = createFormattedHeaders(mockData, {}, capitalize)
    expect(headers).toEqual([
      { header: 'First Name', accessor: 'first_name' },
      { header: 'Last Name', accessor: 'last_name' }
    ])
  })
})
