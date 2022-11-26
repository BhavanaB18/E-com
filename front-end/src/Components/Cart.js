import React from 'react'
// import "./Cart.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./style.css"
import { CartState } from '../context/ProductsContext/Contexts'
import CartItem from './CartItem'


// import f1 from "../img/products/f1.jpg"
// import f2 from "../img/products/f2.jpg"
// import f3 from "../img/products/f3.jpg"


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
                <CartItem/>
              
                {/* <tr>
                    <td><a href="/#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>&#8377;118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377;118.19</td>
                </tr>
                <tr>
                    <td><a href="/#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f2} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>&#8377;128.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377;128.19</td>
                </tr>
                <tr>
                    <td><a href="/#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f3} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>&#8377;138.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377;138.19</td>
                </tr> */}
            </tbody>
        </table>
        <button class="normal">Proceed to checkout</button>
    </section>

      <Footer/>
    </div>
  )
}

export default Cart
