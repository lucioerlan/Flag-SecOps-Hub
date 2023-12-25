import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      refetchInterval: 1000 * 60 * 60
    }
  }
})
