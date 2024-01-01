import * as services from '@/services/featureFlagsService'
import { createFeatureFlagThunk } from '@/store/asyncThunks/createFeatureFlagThunk'
import { toast } from 'react-toastify'

jest.mock('@/services/featureFlagsService')
jest.mock('react-toastify')

describe('createFeatureFlagThunk', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  const translate = jest.fn().mockImplementation((key) => key)
  const payload = {
    name: 'New Feature',
    description: 'Description for new feature',
    state: true,
    translate
  }

  it('should call toast.success when the feature flag is created successfully', async () => {
    jest.spyOn(services, 'createFeatureFlag').mockResolvedValueOnce({})

    const thunk = createFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.success).toHaveBeenCalledWith('success.createFeatureFlag')
  })

  it('should call toast.error when the feature flag creation fails', async () => {
    jest.spyOn(services, 'createFeatureFlag').mockRejectedValueOnce(new Error('Error'))

    const thunk = createFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.error).toHaveBeenCalledWith('error.createFeatureFlag')
  })
})
