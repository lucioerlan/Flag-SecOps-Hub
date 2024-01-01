/* istanbul ignore file */
import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
      refetchInterval: false,
      refetchIntervalInBackground: false,
      suspense: false
    },
    mutations: {
      retry: 1
    }
  }
})
