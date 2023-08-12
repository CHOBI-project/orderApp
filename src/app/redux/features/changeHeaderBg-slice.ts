import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: string;
};

const initialState = {
    value: "images/headerBg_food.jpg",
} as InitialState;

export const changeHeaderBg = createSlice({
    name: "headerBg",
    initialState: initialState,
    reducers: {
        changeHeaderImg: (state, action) => { 
            state.value = action.payload;
            console.log(state.value);
         }, 
    },
});

export const { changeHeaderImg } = changeHeaderBg.actions;
export default changeHeaderBg.reducer;