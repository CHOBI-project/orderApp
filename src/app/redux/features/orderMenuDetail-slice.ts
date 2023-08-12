import { Menu } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: Menu; 
};

const initialState = {
    value: {
        id: "",
        img: "",
        menu: "",
        price: 0,
        checked: false,
        desc: "",
    } as Menu,
} as InitialState;

export const orderMenuDetail = createSlice({
    name: "orderMenu",
    initialState: initialState,
    reducers: {
        getMenuId:      (state, action) => { state.value.id      = action.payload },
        getMenuImg:     (state, action) => { state.value.img     = action.payload },
        getMenuMenu:    (state, action) => { state.value.menu    = action.payload },
        getMenuPrice:   (state, action) => { state.value.price   = action.payload },
        getMenuChecked: (state, action) => { state.value.checked = action.payload },
        getMenuDesc:    (state, action) => { state.value.desc    = action.payload },
        
        handleReset: () => { return initialState },
    },
});

export const { getMenuId, getMenuImg, getMenuMenu, getMenuPrice, getMenuChecked, getMenuDesc } = orderMenuDetail.actions;
export default orderMenuDetail.reducer;