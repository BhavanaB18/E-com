import React from 'react'
import NavBar from './NavBar'
import "./style.css"
import Footer from "./Footer"
import { CartState } from '../context/ProductsContext/Contexts'
import SingleProduct from './SingleProduct'




function Shop() {
    // const [products,setProducts]=useState([])
    // const [num,setNum]=useState(0)
    
    // const myTimeout = setTimeout(mycnt, 1);

    // function mycnt() {
    //     if(num<1){
    //     setNum(num+1);
    //     }
    //     else{
    //         clearTimeout(myTimeout);
    //     }
    // }
    //  useEffect(()=>{
    //     axios.get("http://localhost:5000/products").then(response=>{
    //     console.log("data from response",response.data)
    //     setProducts(response.data)
    //     console.log("products",products)
    //    })

    //  },[num])
    
    
    //  useEffect(()=>{
    //     fetch("http://localhost:5000/products").then(res=>{
    //         return res.json()
    //     }).then(jsonRes => setProducts(jsonRes))
    //     console.log(products)
    //  },[num])

    const response1=CartState()
    console.log("response home.js",response1.products)
    const response=response1.products

  return (
    <>
    <div>
      
      <NavBar/>
      <section id="page-header">
        
        <h2>#StayHome</h2>
        <p>Save more with coupons and upto 70% off!</p>
       
    </section>

    
     <section id="product1" className="section-p1">
          <div className="pro-container">
            {response.map((product)=>{
                return(
                  <SingleProduct prod={product}/> 
                );
            })

            }
        
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
    </>
  )
}

export default Shop
