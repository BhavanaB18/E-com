import React from 'react'
import { CartState } from '../context/ProductsContext/Contexts'


const CartItem = (props) => {

    const response=CartState()
    const cart=response.state.cart
    const dispatch=response.dispatch
  return (
    <div>
      <table>
      <tr>
        {/* <td>{props.prod.name}</td> */}
                    <td><button onClick={()=>{
                  dispatch({type:"REMOVE_FROM_CART",
                     payload:props.prod});
                }}><i className="far fa-times-circle"></i></button></td>
                    <td><img src={props.prod.image} alt=""/></td>
                    <td>{props.prod.name}</td>
                    <td>&#8377;{props.prod.discount_p}</td>
                    <td><input type="number" value={`${props.prod.qty}`}/></td>
                    <td>&#8377;{props.prod.qty*props.prod.discount_p}</td>
                </tr>
      </table>
    </div>
  )
}

export default CartItem
