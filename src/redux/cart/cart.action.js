export const addItem = item => ({
    type: "ADD_ITEM",
    payload: item
})

export const addquantity = item => ({
    type: "ADD_QUANTITY",
    payload: item
})

export const removeItem = item => ({
    type: "SUBTRACT_QUANTITY",
    payload: item
})

export const remove = item => ({
    type: "REMOVE",
    payload: item
})