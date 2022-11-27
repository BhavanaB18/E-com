import React from 'react'
import { CartState } from '../context/ProductsContext/Contexts'



const CartItem = (props) => {

    const response=CartState()
    const cart=response.state.cart
    const dispatch=response.dispatch
    console.log("Cartitem",cart)
    const changeHandler=(event)=>{
        dispatch({type:"CHANGE_CART_QTY",
                    payload:{
                        _id:props.prod._id,
                        qty:event.target.value
                    }})
    }
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
                    <td><input type="number"  min="0" max={`${props.prod.Quantity}`} value={props.prod.qty}
                    onChange={changeHandler}/>
                    </td>
                    <td>&#8377;{props.prod.qty*props.prod.discount_p}</td>
                </tr>
      </table>
    </div>
  )
}

export default CartItem
