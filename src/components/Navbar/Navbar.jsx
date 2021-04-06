// import './navbar.css';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <Link to="/"><h1>Super Store</h1></Link>
            </div>
            <div className="links">
                <Link to="/"  activeClassName="selected" exact>Home</Link>
                <Link to="/deals" activeClassName="selected">Deals</Link>
                <Link to="/cart" activeClassName="selected">Cart</Link>
                <Link to="/"><span id="signin">Sign In</span></Link>
            </div>
        </div>
    )
}


export default Navbar;