import React from 'react'
// import "./NavBar.css"
import "./style.css"
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
import { CartState } from '../context/ProductsContext/Contexts'

function NavBar() {
  const response=CartState()
  let cart=response.state.cart
  return (
    <div id="header">
      {/* <p>This is NavBar</p> */}
      <Link href="#"><img src={logo} className="logo" alt=""/></Link>    
        <div>
            <ul id="navbar">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
                <li id="len">{cart.length}</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
