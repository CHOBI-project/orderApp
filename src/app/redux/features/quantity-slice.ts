import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: number;
}

const initialState = {
    value: 1,
} as InitialState;

const maxQuantity = 10;
const minQuantity = 1;

export const orderQuantity = createSlice({
    name: "orderQuantity",
    initialState: initialState,
    reducers: {
        increment: (state) => { 
            if (state.value < maxQuantity) {
                state.value += 1 
            } else {
                alert("頼みすぎ！！");
            }
        },

        decrement: (state) => { 
            if (state.value > minQuantity) {
                state.value -= 1;
            }
        },
        resetQuantity: () => { return initialState },
    },
});

export const { increment, decrement, resetQuantity } = orderQuantity.actions;
export default orderQuantity.reducer;