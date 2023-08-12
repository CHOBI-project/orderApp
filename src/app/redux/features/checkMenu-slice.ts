import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: boolean;
};

const initialState = {
    value: true,
} as InitialState;

export const checkMenuReducer = createSlice({
    name: "visibility",
    initialState: initialState,
    reducers: {
        checkingMenu: (state) => { state.value = !state.value },
    },
});

export const { checkingMenu } = checkMenuReducer.actions;
export default checkMenuReducer.reducer;