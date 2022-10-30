import React from "react";
import { ReactDOM } from "react";
import logo from '../img/logo.png';
import pay from '../img/pay/pay.png';
import play from '../img/pay/play.jpg';
import app from '../img/pay/app.jpg';
// import "./Footer.css"
import "./style.css"


function Footer(){
    return(
        <div>
            <footer class="section-p1">
                <div class="col">
                    <img class="logo" src={logo} alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> 806,WTT Tower,Central Auto Market,Noida</p>
                    <p><strong>Phone:</strong>040 12345678,040 87654321</p>
                    <p><strong>Hours:</strong>10 AM - 10 PM,Mon-Sat</p>
                    <div class="follow">
                        <h4>Follow us</h4>
                        <div class="icon">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-pinterest-p"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4>About</h4>
                    <a href="#">About us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div class="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div class="row">
                        <img src={app} alt=""/>
                        <img src={play} alt=""/>
                </div>
                    <p>Secured Payment Gateways</p>
                    <img src={pay} alt=""/>
                </div>
                <div class="copyright">
                    <p>&copy;E-Commerce Template 062,064</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
