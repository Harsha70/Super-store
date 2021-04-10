const storage = localStorage.getItem('state')	? JSON.parse(localStorage.getItem('state')).cart.cartItems	: [];
const INITIAL_STATE = {
    
    cartItems:storage
}
// const initialState = { cartItems: storage, ...sumItems(storage) };
const cartReducer = (state= INITIAL_STATE, action) => {
    // let cartItemToAdd = action.payload
    // console.log(cartItemToAdd)
    switch (action.type) {
        case "ADD_ITEM":
            const existingCartItem = state.cartItems.find(cartItem=>cartItem.item._id===action.payload.item._id)
            if (state.cartItems.length===0){
                return{
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }else if(!existingCartItem){
                return{
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
            }else if (existingCartItem){
                const itemquantityupdate = state.cartItems.map(cartItem=>cartItem.item._id===action.payload.item._id && cartItem.quantity!==action.payload.quantity
                    ? {...cartItem, quantity: action.payload.quantity}
                    : cartItem
                );
                console.log(itemquantityupdate)
                return{
                    ...state,
                    cartItems: itemquantityupdate
                };
            }
        case "ADD_QUANTITY":
            return{
                ...state,
                cartItems: state.cartItems.map(cartItem=>cartItem.item._id===action.payload.item._id
                    ? {...cartItem, quantity: action.payload.quantity+1}
                    : cartItem
                )
            };
        
        case "SUBTRACT_QUANTITY":
            return{
                ...state,
                cartItems: state.cartItems.map(cartItem=>cartItem.item._id===action.payload.item._id
                    ? {...cartItem, quantity: action.payload.quantity-1}
                    : cartItem
                )
            };

        case "REMOVE":
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.item._id !== action.payload.item._id
                  )
            };

        default:
            return state;
    }
}

export default cartReducer;