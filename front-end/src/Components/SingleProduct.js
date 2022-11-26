import React from 'react'
import { CartState } from '../context/ProductsContext/Contexts'
import "./SingleProduct.css"


const SingleProduct = (props) => {
    const product=props.prod
    const response=CartState()
    // console.log(response,"from single object")
    let cart=response.state.cart
    console.log(cart,"from single object")
    let dispatch=response.dispatch
  return (
    <div className="pro">
                <img src={product.image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5> {product.name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{product.discount_p}</h4>
                </div>
                {cart.some(p=>p._id===product._id)?
                (<button onClick={()=>{
                  dispatch({type:"REMOVE_FROM_CART",
                     payload:product});
                }}>
                <i className="fa fa-shopping-cart cart1"></i></button>)
                : (<button onClick={()=>{
                  dispatch({type:"ADD_TO_CART",
                     payload:product});
                }} disabled={!product.Quantity}>
                  <i className="fa fa-shopping-cart cart"></i></button>)
                }
                
    </div> 
  )
}

export default SingleProduct
