import React from 'react'
import f1 from "../img/products/f1.jpg"


const CartItem = () => {
  return (
    <div>
      <table>
      <tr>
                    <td><a href="/#"><i className="far fa-times-circle"></i></a></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>&#8377;118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>&#8377;118.19</td>
                </tr>
      </table>
    </div>
  )
}

export default CartItem
