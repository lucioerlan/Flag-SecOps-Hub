import { queryClient } from '@/factories/queryClient'
import { QueryClient } from 'react-query'

describe('persistQqueryClientueryClient', () => {
  it('should return a QueryClient', () => {
    expect(queryClient).toBeInstanceOf(QueryClient)
  })
})
