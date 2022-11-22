import React,{useState,useEffect } from 'react'
import NavBar from './NavBar'
import "./style.css"
import axios from "axios"
import Footer from "./Footer"


function Shop() {
    const [products,setProducts]=useState([])
    const [num,setNum]=useState(0)
    
    const myTimeout = setTimeout(mycnt, 1);

    function mycnt() {
        if(num<1){
        setNum(num+1);
        }
        else{
            clearTimeout(myTimeout);
        }
    }
     useEffect(()=>{
        axios.get("http://localhost:5000/products").then(response=>{
        console.log("data from response",response.data)
        setProducts(response.data)
        console.log("products",products)
       })

     },[num])
    
    
    //  useEffect(()=>{
    //     fetch("http://localhost:5000/products").then(res=>{
    //         return res.json()
    //     }).then(jsonRes => setProducts(jsonRes))
    //     console.log(products)
    //  },[num])

  return (
    <>
    { products.length ?
    <div>
      
      <NavBar/>
      <section id="page-header">
        
        <h2>#StayHome</h2>
        <p>Save more with coupons and upto 70% off!</p>
       
    </section>

    
     <section id="product1" className="section-p1">
          <div className="pro-container">
            <div className="pro">
                <img src={products[0].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products.length>0? products[0].name:console.log('Sorry')}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[0].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div> 
             <div className="pro">
                <img src={products[1].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[1].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[1].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div> 
            <div className="pro">
                <img src={products[2].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[2].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[2].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[3].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[3].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[3].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[4].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[4].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[4].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[5].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[5].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[5].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[6].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[6].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[6].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[7].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[7].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[7].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div> 
        
             <div className="pro">
                <img src={products[8].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[8].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[8].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[9].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[9].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[9].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[10].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[10].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[10].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[11].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[11].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[11].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[12].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[12].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[12].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[13].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[13].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[13].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[14].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[14].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[14].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
            </div>
            <div className="pro">
                <img src={products[15].image} alt=""/>
                <div className="des">
                    <span>Adidas</span>
                    <h5>{products[15].name}</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4>&#8377;{products[15].discount_p}</h4>
                </div>
                <a href="/#"><i className="fa fa-shopping-cart cart"></i></a>
           </div>  
        </div>   
    </section> 

    <section id="pagination" className="section-p1">
        <a href="/#">1</a>
        <a href="/#">2</a>
        <a href="/#"><i className="fal fa-long-arrow-alt-right"></i></a>
    </section>

    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign up For NewsLetters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email addresss"/> 
            <button className="normal">Sign Up</button>
        </div> 
    </section>
      <Footer/>
    
    </div>
    :console.log('sorry')}
    </>
  )
}

export default Shop
