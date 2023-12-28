import * as services from '@/services/featureFlagsService'
import { deleteFeatureFlagThunk } from '@/store/asyncThunks/deleteFeatureFlagThunk'
import { toast } from 'react-toastify'

jest.mock('@/services/featureFlagsService')
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

describe('deleteFeatureFlagThunk', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  const translate = jest.fn().mockImplementation((key) => key)
  const flagId = 'flag-id'

  it('should call toast.success when the feature flag is deleted successfully', async () => {
    jest.spyOn(services, 'deleteFeatureFlag').mockResolvedValueOnce({})

    const thunk = deleteFeatureFlagThunk({ flagId, translate })
    await thunk(dispatch, getState, undefined)
    expect(toast.success).toHaveBeenCalledWith('success.deleteFeatureFlag')
  })

  it('should call toast.error when the feature flag deletion fails', async () => {
    jest.spyOn(services, 'deleteFeatureFlag').mockRejectedValueOnce(new Error('Error'))

    const thunk = deleteFeatureFlagThunk({ flagId, translate })
    await thunk(dispatch, getState, undefined)
    expect(toast.error).toHaveBeenCalledWith('error.deleteFeatureFlag')
  })
})
