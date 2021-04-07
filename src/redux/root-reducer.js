import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer.js";

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer