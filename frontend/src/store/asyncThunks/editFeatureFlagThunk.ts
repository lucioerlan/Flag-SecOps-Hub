import { updateFeatureFlag } from '@/services/featureFlagsService'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

interface EditFeatureFlagPayload {
  id: string
  name: string
  description: string
  state: boolean
  translate: (key: string) => string
}

export const editFeatureFlagThunk = createAsyncThunk(
  'featureFlags/edit',
  async ({ id, name, description, state, translate }: EditFeatureFlagPayload) => {
    try {
      await updateFeatureFlag(id, { name, description, state })
      toast.success(translate('success.updateFeatureFlag'))
    } catch (error) {
      toast.error(translate('error.updateFeatureFlag'))
    }
  }
)
