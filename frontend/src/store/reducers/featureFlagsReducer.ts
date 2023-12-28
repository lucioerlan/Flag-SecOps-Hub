import { createSlice } from '@reduxjs/toolkit'

const initialState: string[] = []

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {
    initializeFeatureFlags: (state, action) => action.payload
  }
})

export const { initializeFeatureFlags } = featureFlagsSlice.actions
export default featureFlagsSlice.reducer
