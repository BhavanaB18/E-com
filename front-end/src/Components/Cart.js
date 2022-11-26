import React from 'react'
// import "./Cart.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./style.css"
import { CartState } from '../context/ProductsContext/Contexts'
import CartItem from './CartItem'

function Cart() {
    const response=CartState()
    let cart=response.state.cart
    let dispatch=response.dispatch
  return (
    <div className='home'>
      <NavBar/>
      <section className="about-header">
        
        <h2>#Let's Talk</h2>
        <p>Leave a Message,we would love to hear from you!</p>
       
    </section>

    <section id="cart" className="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody id>
                {cart.map(prod=>{
                    return (<CartItem prod={prod}/>)
                })}
            </tbody>
        </table>
        <button class="normal">Save the Cart</button>
        <button class="normal">Proceed to checkout</button>
    </section>

      <Footer/>
    </div>
  )
}

export default Cart
