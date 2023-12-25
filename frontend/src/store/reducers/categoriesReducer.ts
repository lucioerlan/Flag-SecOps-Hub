import { createSlice } from '@reduxjs/toolkit'

const initialState: string[] = []

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    initializeCategories: (state, action) => action.payload
  }
})

export const { initializeCategories } = categoriesSlice.actions
export default categoriesSlice.reducer
