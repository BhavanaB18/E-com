import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div id="header">
      {/* <p>This is NavBar</p> */}
      <Link href="#"><img src="img/logo.png" className="logo" alt=""/></Link>    
        <div>
            <ul id="navbar">
                <li><Link className="active" to="/home">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li id="lg-bag"><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
