import { queryClient } from '@/factories/queryClientFactory'
import { QueryClient } from 'react-query'

describe('persistQqueryClientueryClient', () => {
  it('should return a QueryClient', () => {
    expect(queryClient).toBeInstanceOf(QueryClient)
  })
})
