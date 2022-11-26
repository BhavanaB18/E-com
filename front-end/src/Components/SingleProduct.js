import React from 'react'

const SingleProduct = (props) => {
    const product=props.prod
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
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
    </div> 
  )
}

export default SingleProduct
