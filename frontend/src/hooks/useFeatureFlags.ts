import { listFeatureFlags } from '@/services/feature-flags'
import { initializeFeatureFlags } from '@/store/reducers/feature-flagsReducer'
import { useAppDispatch } from '@/store/shared'
import { useQuery, useQueryClient } from 'react-query'

const useFeatureFlags = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const { data, isSuccess } = useQuery('featureFlags', listFeatureFlags, {
    onSuccess: (data) => {
      dispatch(initializeFeatureFlags(data))
    }
  })

  const refetchFeatureFlags = () => {
    queryClient.invalidateQueries('featureFlags')
  }

  return { data, isSuccess, refetchFeatureFlags }
}

export default useFeatureFlags
