import { createReducer } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
})

export const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
