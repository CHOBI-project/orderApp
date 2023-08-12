"use client";

import { configureStore } from "@reduxjs/toolkit";
import checkMenuSlice from "./features/checkMenu-slice";
import changeHeaderBgSlice from "./features/changeHeaderBg-slice";
import orderMenuIdSlice from "./features/orderMenuDetail-slice";
import menuLabelSlice from "./features/menuLabel-slice";
import quantitySlice from "./features/quantity-slice";
import orderdedMenuSlice from "./features/orderdedMenu-slice";
import totalAmountSlice from "./features/totalAmount-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        visibility   : checkMenuSlice,
        headerBg     : changeHeaderBgSlice,
        orderMenu    : orderMenuIdSlice,  
        label        : menuLabelSlice,
        orderQuantity: quantitySlice,
        orderded     : orderdedMenuSlice,
        total        : totalAmountSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;