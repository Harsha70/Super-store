// const storage = localStorage.getItem('state')	? JSON.parse(localStorage.getItem('state')).cart.orders	: [];
const storage = []
const INITIAL_STATE = {
    
    orders:storage
}
// const initialState = { orders: storage, ...sumItems(storage) };
const orderReducer = (state= INITIAL_STATE, action) => {
    let cartItemToAdd = action.payload
    console.log(cartItemToAdd)
    switch (action.type) {
        case "ADD_ORDERS":
                return{
                    ...state,
                    orders: [...state.orders, action.payload]
                };

        default:
            return state;
    }
}

export default orderReducer;