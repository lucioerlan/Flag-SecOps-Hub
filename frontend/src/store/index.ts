import { configureStore } from '@reduxjs/toolkit'

import featureFlagsReducer from './reducers/feature-flagsReducer'

const store = configureStore({
  reducer: {
    featureFlags: featureFlagsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
