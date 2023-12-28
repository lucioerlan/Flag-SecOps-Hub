import { formatDate } from '@/utils'

describe('formatDate', () => {
  it('should correctly format the date string to pt-BR locale', () => {
    const date = '2023-05-05'
    const formatted = formatDate(date)
    expect(formatted).toBe('05/05/2023')
  })

  it('should correctly format the date string to a different locale', () => {
    const date = '2023-05-05'
    const formatted = formatDate(date, 'en-US')
    expect(formatted).toBe('5/5/2023')
  })
})
