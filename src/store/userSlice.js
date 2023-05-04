import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value= [...state.value, action.payload];
        },
    },
});

export const { addUser } = userSlice.actions;

export const selectUsers = (state) => state.users.value;

export default userSlice.reducer;
