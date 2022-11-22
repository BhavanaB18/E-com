import React,{useState,useEffect } from 'react'
import NavBar from './NavBar'
import "./style.css"

import Footer from "./Footer"
import n1 from '../img/products/n1.jpg';
import n2 from '../img/products/n2.jpg';
import n3 from '../img/products/n3.jpg';
import n4 from '../img/products/n4.jpg';  
import n5 from '../img/products/n5.jpg';
import n6 from '../img/products/n6.jpg';
import n7 from '../img/products/n7.jpg';
import n8 from '../img/products/n8.jpg';
import f1 from '../img/products/f1.jpg';
import f2 from '../img/products/f2.jpg';
import f3 from '../img/products/f3.jpg';
import f4 from '../img/products/f4.jpg';
import f5 from '../img/products/f5.jpg';
import f6 from '../img/products/f6.jpg';
import f7 from '../img/products/f7.jpg';
import f8 from '../img/products/f8.jpg';


function Shop() {
     const [products,setProducts]=useState([])
     
    //  useEffect(()=>{
    //     axios.get("http://localhost:5000/products").then(response=>{
    //     console.log("data from response",response.data)
    //     setProducts(response.data)
    //     console.log("products",products)
    //    })

    //  },[])

    const [num,setNum]=useState(0)
    
    const myTimeout = setTimeout(mycnt, 1000);

    function mycnt() {
        if(num<10){
            setNum(num+1);
        }
        else{
            clearTimeout(myTimeout);
        }
    }
    
    
     useEffect(()=>{
        fetch("http://localhost:5000/products").then(res=>{
            return res.json()
        }).then(jsonRes => setProducts(jsonRes))
        console.log(products)
     },[num])
    //     const fetchProducts = async () => {
    //       const { data } = await axios.get('/api/products')
    
    //       setProducts(data)
    //     }
    
    //     fetchProducts()
    //   }, [])
    //   console.log(products)

    // console.log(products[0].image)
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
                <img src={n1} alt=""/>
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
                <img src={n2} alt=""/>
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
                <img src={n3} alt=""/>
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
                <img src={n4} alt=""/>
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
                <img src={n5} alt=""/>
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
                <img src={n6} alt=""/>
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
                <img src={n7} alt=""/>
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
                <img src={n8} alt=""/>
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
                <img src={f1} alt=""/>
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
                <img src={f2} alt=""/>
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
                <img src={f3} alt=""/>
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
                <img src={f4} alt=""/>
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
                <img src={f5} alt=""/>
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
                <img src={f6} alt=""/>
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
                <img src={f7} alt=""/>
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
                <img src={f8} alt=""/>
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
