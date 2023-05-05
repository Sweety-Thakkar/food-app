import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    label: "all",
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setFoodLabel: (state, action) => {
            state.label = action.payload
        }
    },
})

export const { setFoodLabel } = foodSlice.actions

export default foodSlice.reducer