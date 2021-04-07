import React from 'react'
import './CartPageItems.css'

import { connect } from "react-redux";
import { addquantity } from "../../redux/cart/cart.action";
import { removeItem } from "../../redux/cart/cart.action";
import { remove } from "../../redux/cart/cart.action";

const CartPageItems = ({cartitem, addquantity, removeItem, remove}) => {
    console.log("addquantity--------->",addquantity)
    const {item, quantity} = cartitem
    return (
        <div className="cartItems">
            <img src={item.imageUrl} alt="imgs" className="cartImg" />
            <div>
                <div className="titleprice">
                    <p className="Itemname">{item.name}</p>
                    <p className="price"><strong>${item.price}</strong></p>
                </div>
                
                <div style={{display:"flex", paddingTop:"10px"}}>
                    <span style={{paddingRight:"10px"}}>Quantity:</span>
                    <div className='arrow' onClick={() => removeItem({item, quantity})}>
                        &#10094;
                    </div>
                        <span className='value'> {quantity}</span>
                    <div className='arrow' onClick={() => addquantity({item, quantity})}>
                        &#10095; 
                    </div>
                    <p className='arrow' onClick={() => remove({item, quantity})}>Remove</p>            
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addquantity: item => dispatch(addquantity(item)),
    removeItem: item => dispatch(removeItem(item)),
    remove: item => dispatch(remove(item))
})

export default connect(null,mapDispatchToProps)(CartPageItems)