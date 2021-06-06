import React,{useState} from 'react'
import { connect } from 'react-redux';
import './Checkout.css'
import { empty } from "../../redux/cart/cart.action";
import { addOrders } from "../../redux/orders/order.action"


const Checkout = ({cartItems, price, empty, addOrders}) => {
    // console.log('cartItems',cartItems)
    const [address, setaddress] = useState({})

    const domain = document.domain === 'localhost'

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(address)
        const orderdetails = {
            address:address,
            items:cartItems
        }
        const options = {
			key: domain ? process.env.REACT_APP_KEY : 'PRODUCTION_KEY',
			currency: 'INR',
			amount: price*100,
			name: 'Purchasing',
			description: 'Thank you for buying in our store',
			handler: function (response) {
                console.log(response)
                addOrders(orderdetails)
                empty()
                setaddress({})
                alert("Thanks for shoping")
			},
			prefill: {
				name: "Harsha",
				email: 'Harsha@gmail.com',
				phone_number: '123456789'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
    }


    return (
        <div>
        <form style={{margin:'0 auto', maxWidth:'50%'}} >
            <h3>Shipping Address</h3>
            <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Harsha" onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
            <input type="text" id="email" name="email" placeholder="qwerty@example.com" onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
            <input type="text" id="adr" name="address" placeholder="1st Street" onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <label htmlFor="city"><i className="fa fa-institution" /> City</label>
            <input type="text" id="city" name="city" placeholder="Bangalore" onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" placeholder="Karnataka" onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder={500352} onChange={e => setaddress({ ...address, [e.target.name]: e.target.value })}/>
            <input type="submit" defaultValue="Continue to checkout" className="btn" onClick={handleSubmit}/>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
    cartItems:state.cart.cartItems,
    price:state.cart.cartItems.reduce((accumulator, cartitem)=>{
        return accumulator + (cartitem.item.price*cartitem.quantity);
    },0)
});
}

const mapDispatchToProps = dispatch => ({
    empty: () => dispatch(empty()),
    addOrders: items => dispatch(addOrders(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)