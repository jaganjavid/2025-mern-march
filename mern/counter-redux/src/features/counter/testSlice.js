import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "test",
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
      changeTest: (state) => {
        state.value = "Test Again"
      }
    },
})


// Action creators are generated for each case reducer function
export const { changeTest } = testSlice.actions

export default testSlice.reducer