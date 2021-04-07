// import './navbar.css';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css'

import { connect } from 'react-redux';


const Navbar = ({noofcartItems}) => {
    return (
        <div className="navbar">
            <div>
                <Link to="/"><h1>Super Store</h1></Link>
            </div>
            <div className="links">
                <Link to="/"  activeClassName="selected" exact>Home</Link>
                <Link to="/deals" activeClassName="selected">Deals</Link>
                <Link to="/cart" activeClassName="selected">Cart({noofcartItems})</Link>
                <Link to="/"><span id="signin">Sign In</span></Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
    noofcartItems:state.cart.cartItems.length
});}

export default connect(mapStateToProps)(Navbar);