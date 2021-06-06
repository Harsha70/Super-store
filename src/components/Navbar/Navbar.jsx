// import './navbar.css';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css'

import { connect } from 'react-redux';


const Navbar = ({noofcartItems}) => {
    return (
        <div className="navbar">
            <div>
                <Link to="/"><h1 className="title">Super Store</h1></Link>
            </div>
            <div className="links">
                <Link to="/"  activeClassName="selected" exact className="line title">Home</Link>
                <Link to="/deals" activeClassName="selected" className="line title">Deals</Link>
                <Link to="/cart" activeClassName="selected" className="line title">Cart({noofcartItems})</Link>
                <Link to="/myorders" activeClassName="selected" className="line title">My Orders</Link>
                <Link to="/"><span id="signin" className="line title">Sign In</span></Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    localStorage.setItem(
    'state',
    JSON.stringify(state? state : {})
    );
    return({
    noofcartItems:state.cart.cartItems.length
});}

export default connect(mapStateToProps)(Navbar);