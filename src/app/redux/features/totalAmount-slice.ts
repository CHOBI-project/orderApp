import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: number;
};

const initailState = {
    value: 0,
} as InitialState;

export const totalAmount = createSlice({
    name: "total",
    initialState: initailState,
    reducers: {
        orderTotal    : (state, action) => { state.value += action.payload }, 
        priceDecrement: (state, action) => { state.value -= action.payload },
    },
});

export const { orderTotal, priceDecrement } = totalAmount.actions;
export default totalAmount.reducer;