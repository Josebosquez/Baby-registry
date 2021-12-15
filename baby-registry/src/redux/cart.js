import { createStore } from "redux"

const reducer = (state, action)=> {
    return state;
}
const initialState = {}

export const store = createStore(
    reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
