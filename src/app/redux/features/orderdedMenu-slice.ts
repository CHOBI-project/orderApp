import { createSlice } from "@reduxjs/toolkit";

export type newOrder = {
    id: string,
    menuImg: string,
    name: string,
    quantity: number,
    price: number,
    checked: boolean,
}

const initialState: newOrder[] = [];

export const orderdedMenu = createSlice({
    name: "orderded",
    initialState: { value: initialState },
    reducers: {
        getNewOrderMenu: (state, action) => { state.value.push(action.payload) },
        deleteOrderMenu: (state, action) => { state.value = state.value.filter((order) => order.id !== action.payload.id) },
    },
});

export const { getNewOrderMenu, deleteOrderMenu } = orderdedMenu.actions;
export default orderdedMenu.reducer;