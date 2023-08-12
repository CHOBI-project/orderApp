import { btLabel } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: btLabel;
};

const initialState = {
    value: {
        text: "料理",
        subText: "yammy!!",
        classes: "foodBt active",
    } as btLabel,
} as InitialState;

export const menuLabel = createSlice({
    name: "label",
    initialState: initialState,
    reducers: {
        getLabelText   : (state, action) => { state.value.text    = action.payload },
        getLabelSubText: (state, action) => { state.value.subText = action.payload },
        getLabelClasses: (state, action) => { state.value.classes = action.payload },
        handleReset    : () => { return initialState },
    },
});

export const { getLabelText, getLabelSubText, getLabelClasses, handleReset } = menuLabel.actions;
export default menuLabel.reducer;