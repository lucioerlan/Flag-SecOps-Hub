import { listFeatureFlags } from '@/services/featureFlagsService'
import { initializeFeatureFlags } from '@/store/reducers/featureFlagsReducer'
import { useAppDispatch } from '@/store/shared'
import { useQuery, useQueryClient } from 'react-query'

export default function useFeatureFlags() {
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
