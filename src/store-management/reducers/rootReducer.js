import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartReducer";


const rootReducer=combineReducers({
    cart:cartSlice
});

export default rootReducer;