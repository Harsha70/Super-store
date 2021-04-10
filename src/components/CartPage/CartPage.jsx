import React from 'react'
import "./CartPage.css"
import { NavLink as Link } from 'react-router-dom';

import CartPageItems from "../CartPageItems/CartPageItems"

import { connect } from 'react-redux';

const CartPage = ({cartItems, price}) => {
    return (
        <div className="cartpagewrapper">
            <h1 style={{textAlign:"initial", padding:"15px 0px"}}>Shopping Cart</h1>
            {cartItems.map((cartitem, index)=>(
                <CartPageItems key={index} cartitem={cartitem}/>
            ))}
            <div style={{display:"flex",flexFlow: "row",justifyContent: "space-between", padding:"10px"}}>
            <Link to="/checkout"><span className="checkout">Checkout</span></Link>
                <span>Total: {price}</span>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return({
    cartItems:state.cart.cartItems,
    price:state.cart.cartItems.reduce((accumulator, cartitem)=>{
        return accumulator + (cartitem.item.price*cartitem.quantity);
    },0)
});}

export default connect(mapStateToProps)(CartPage)