import { deleteFeatureFlag } from '@/services/feature-flags'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

type FeatureFlagDeleteProps = {
  flagId: string
  translate: (key: string) => string
}

export const deleteFeatureFlagThunk = createAsyncThunk(
  'featureFlags/delete',
  async ({ flagId, translate }: FeatureFlagDeleteProps) => {
    try {
      await deleteFeatureFlag(flagId)
      toast.success(translate('success.deleteFeatureFlag'))
    } catch (error) {
      toast.error(translate('error.deleteFeatureFlag'))
    }
  }
)
