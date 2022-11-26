import React, { useEffect, useState } from 'react'
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

    const [total,setTotal]=useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>
          acc + curr.discount_p*curr.qty,0
    ))
    },[cart])
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
        <p class="total"><b>Total:{total}</b></p>
        <button class="normal">Save the Cart</button>
        <button class="normal">Proceed to checkout</button>
    </section>

      <Footer/>
    </div>
  )
}

export default Cart
