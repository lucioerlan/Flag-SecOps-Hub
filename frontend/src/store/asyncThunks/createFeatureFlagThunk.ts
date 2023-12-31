import { createFeatureFlag } from '@/services/featureFlagsService'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

type CreateFeatureFlagPayload = {
  name: string
  description: string
  state: boolean
  translate: (key: string) => string
}

export const createFeatureFlagThunk = createAsyncThunk(
  'featureFlags/create',
  async ({ name, description, state, translate }: CreateFeatureFlagPayload) => {
    try {
      await createFeatureFlag({ name, description, state })
      toast.success(translate('success.createFeatureFlag'))
    } catch (error) {
      toast.error(translate('error.createFeatureFlag'))
    }
  }
)
