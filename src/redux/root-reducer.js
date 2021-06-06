import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer.js";
import orderReducer from "./orders/order.reducer.js"

const rootReducer = combineReducers({
    cart: cartReducer,
    orders: orderReducer
})

export default rootReducer