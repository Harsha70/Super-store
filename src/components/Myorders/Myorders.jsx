import React from 'react'
// import "./CartPage.css"
import OrderItems from "../OrderItems/OrderItems"

import { connect } from 'react-redux';

const Myorders = ({orders}) => {
    return (
        <div className="cartpagewrapper">
            <h1 style={{textAlign:"initial", padding:"15px 0px"}}>My Orders</h1>
            <div>
            {orders.map((order, index)=>(
                <OrderItems key={index} order={order}/>
            ))}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return({
    orders:state.orders.orders,
});}

export default connect(mapStateToProps)(Myorders)