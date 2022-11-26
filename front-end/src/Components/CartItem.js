import React from 'react'


const CartItem = (props) => {
  return (
    <div>
      <table>
      <tr>
        {/* <td>{props.prod.name}</td> */}
                    <td><a href="/#"><i className="far fa-times-circle"></i></a></td>
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
