import { updateFeatureFlag } from '@/services/featureFlagsService'
import { FeatureFlag } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

interface FeatureFlagsState {
  body: FeatureFlag[]
}

interface UpdateFeatureFlagPayload {
  id: string
  translate: (key: string) => string
}

const getFeatureFlagById = (state: FeatureFlagsState, id: string) => state.body.find((flag) => flag.id === id)

export const updateToggleFeatureFlagThunk = createAsyncThunk(
  'featureFlags/toggle',
  async ({ id, translate }: UpdateFeatureFlagPayload, { getState }) => {
    const state = getState() as { featureFlags: FeatureFlagsState }
    const featureFlag = getFeatureFlagById(state.featureFlags, id)

    try {
      await updateFeatureFlag(id, { state: !featureFlag?.state })
      toast.success(translate('success.updateFeatureFlag'))
    } catch (error) {
      toast.error(translate('error.updateFeatureFlag'))
    }
  }
)
