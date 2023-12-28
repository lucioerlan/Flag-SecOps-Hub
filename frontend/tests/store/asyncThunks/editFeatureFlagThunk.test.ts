import * as services from '@/services/featureFlagsService'
import { editFeatureFlagThunk } from '@/store/asyncThunks/editFeatureFlagThunk'
import { toast } from 'react-toastify'

jest.mock('@/services/featureFlagsService')
jest.mock('react-toastify')

describe('editFeatureFlagThunk', () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  const translate = jest.fn().mockImplementation((key) => key)
  const payload = {
    id: '1',
    name: 'Edited Feature',
    description: 'Updated description',
    state: true,
    translate
  }

  it('should call toast.success when the feature flag is updated successfully', async () => {
    jest.spyOn(services, 'updateFeatureFlag').mockResolvedValueOnce({})
    const thunk = editFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.success).toHaveBeenCalledWith('success.updateFeatureFlag')
  })

  it('should call toast.error when the feature flag update fails', async () => {
    jest.spyOn(services, 'updateFeatureFlag').mockRejectedValueOnce(new Error('Error'))
    const thunk = editFeatureFlagThunk(payload)
    await thunk(dispatch, getState, undefined)
    expect(toast.error).toHaveBeenCalledWith('error.updateFeatureFlag')
  })
})
