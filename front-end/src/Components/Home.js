import React from 'react'
import NavBar from './NavBar'
import Footer from "./Footer"
import f1 from '../img/features/f1.png';
import f2 from '../img/features/f2.png';
import f3 from '../img/features/f3.png';
import f4 from '../img/features/f4.png';
import f5 from '../img/features/f5.png';
import f6 from '../img/features/f6.png';
import { CartState } from '../context/ProductsContext/Contexts';

// import "./Home.css"
import "./style.css"
import SingleProduct from './SingleProduct';

function Home() {

    const response1=CartState()
    const response=response1.products
  return (
    <> 
    <div>
            <NavBar />          
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products </h1>
                <p>Save more with coupons and upto 70% off!</p>
                <button>Shop Now</button>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src={f1} alt=""/>
                    <h6>Free Shipping</h6>     
                </div>
                <div className="fe-box">
                    <img src={f2} alt=""/>
                    <h6>Online Order</h6>     
                </div>
                <div className="fe-box">
                    <img src={f3} alt=""/>
                    <h6>Save Money</h6>     
                </div>
                <div className="fe-box">
                    <img src={f4} alt=""/>
                    <h6>Promotions</h6>     
                </div>
                <div className="fe-box">
                    <img src={f5} alt=""/>
                    <h6>Happy Sell</h6>     
                </div>
                <div className="fe-box">
                    <img src={f6} alt=""/>
                    <h6>24/7 Support</h6>     
                </div>
            </section>

            <section id="product1" className="section-p1">  
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                { response.slice(0,8).map(product=>{
                    return <SingleProduct prod={product}/>
                })}
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All t-shirts and Accessories</h2>
                <button className="normal">Explore More</button>
            </section>

            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                { response.slice(8,16).map(product=>{
                    return <SingleProduct prod={product}/>
                })}
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>Crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>Spring/Summer</h4>
                    <h2>upcoming Season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button className="white">Collection</button>
                </div>
                
            </section>

            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASONAL SALE </h2>
                    <h3>Winter Collection 50% Off</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring/Summer 2022</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>    
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
    );
}


export default Home


        

