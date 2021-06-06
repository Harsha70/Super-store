import React from 'react'
import Displayorders from "./Displayorders/Displayorders"

const OrderItems = ({order}) => {
    const {address, items} = order
    const {firstname, city, state, zip} = {...address}
    const adress= address.address
    // console.log("address",items)
    const price = items.reduce((accumulator, items)=>{
        return accumulator + (items.item.price*items.quantity);
    },0)

    return (
    <div>
            
        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr', paddingBottom:'20px'}}>
            <div style={{textAlign:'initial'}}>
                <p>Name: {firstname}</p>
                <p>address: {adress}</p>
                <p>city: {city}</p>
                <p>state: {state}</p>
                <p>zip: {zip}</p>
            </div>
            <div>
                {items.map((item,index)=><Displayorders key={index} itemss={item} />)}
            </div>
        </div>
        <p style={{textAlign:'end'}}>Totalprice: {price}</p>
    </div>
    )
}

export default OrderItems
