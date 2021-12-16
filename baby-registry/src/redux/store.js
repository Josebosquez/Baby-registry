import {createStore} from "redux"
import { shoppingCartReducer } from "./shoppingCartState";

export const store = createStore(shoppingCartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())