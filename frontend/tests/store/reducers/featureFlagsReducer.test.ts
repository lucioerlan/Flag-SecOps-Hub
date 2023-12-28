import featureFlagsReducer, { initializeFeatureFlags } from '@/store/reducers/featureFlagsReducer'
import { configureStore } from '@reduxjs/toolkit'

describe('featureFlagsSlice', () => {
  let store: {
    getState: () => { featureFlags: string[] }
    dispatch: (arg0: { type: string; payload: string[] }) => void
  }

  beforeEach(() => {
    store = configureStore({
      reducer: {
        featureFlags: featureFlagsReducer
      }
    })
  })

  it('should handle initial state', () => {
    expect(store.getState().featureFlags).toEqual([])
  })

  it('should handle initializeFeatureFlags', () => {
    const flags = [
      {
        id: '1',
        name: 'featureFlag',
        description: 'featureFlag',
        state: true,
        created_at: '2021-08-10T00:00:00.000Z',
        updated_at: '2021-08-10T00:00:00.000Z'
      }
    ]

    store.dispatch(initializeFeatureFlags(flags))
    expect(store.getState().featureFlags).toEqual(flags)
  })

  it('should handle initializeFeatureFlags with empty array', () => {
    store.dispatch(initializeFeatureFlags([]))
    expect(store.getState().featureFlags).toEqual([])
  })
})
