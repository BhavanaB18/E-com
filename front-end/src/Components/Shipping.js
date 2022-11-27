import React from 'react'
import "./Shipping.css"
import con from "../img/confirmed.jpg"
import { Link } from 'react-router-dom'

function Shipping() {
  return (
    <div>
      <div class="container">
        <div class="box">
            <h1>Your order has been received</h1>
            <div class="inner-box">
                <img src={con}/>
                <h3>Thank You for your purchase</h3>
                <Link to="/home"><button>Continue Shopping</button></Link>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Shipping
