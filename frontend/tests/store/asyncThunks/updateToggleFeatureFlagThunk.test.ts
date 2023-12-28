import * as services from '@/services/featureFlagsService'
import { updateToggleFeatureFlagThunk } from '@/store/asyncThunks/updateToggleFeatureFlagThunk'
import { toast } from 'react-toastify'

jest.mock('@/services/featureFlagsService')
jest.mock('react-toastify')

describe('updateToggleFeatureFlagThunk', () => {
  const dispatch = jest.fn()
  const getState = jest.fn(() => ({
    featureFlags: {
      body: [{ id: '1', state: true }]
    }
  }))
  const translate = jest.fn().mockImplementation((key) => key)
  const payload = {
    id: '1',
    translate
  }

  it('should call toast.success when the feature flag state is toggled successfully', async () => {
    jest.spyOn(services, 'updateFeatureFlag').mockResolvedValueOnce({})
    const thunk = updateToggleFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.success).toHaveBeenCalledWith('success.updateFeatureFlag')
  })

  it('should call toast.error when the feature flag state toggle fails', async () => {
    jest.spyOn(services, 'updateFeatureFlag').mockRejectedValueOnce(new Error('Error'))
    const thunk = updateToggleFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.error).toHaveBeenCalledWith('error.updateFeatureFlag')
  })
})
