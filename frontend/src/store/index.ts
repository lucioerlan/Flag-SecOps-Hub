import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from './reducers/categoriesReducer'

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
