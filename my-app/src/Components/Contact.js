import React from 'react'
// import "./Contact.css"
import "./style.css"
import NavBar from './NavBar'
import Footer from "./Footer"

function Contact() {
  return (
    <div>
      <NavBar/>
    <section class="about-header">
        
        <h2>#Let's Talk</h2>
        <p>Leave a Message,we would love to hear from you!</p>
       
    </section>

    <section id="contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fal fa-map"></i>
                    <p>806,WTT Tower,Central Auto Market,Noida</p>
                </li>
                <li>
                    <i class="far fa-envelope"></i> 
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i class="fal fa-phone-alt"></i>    
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i class="fal fa-clock"></i>
                    <p>Monday to Saturday :10:00am to 22:00pm</p>
                </li>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4861646278587!2d78.38670241409916!3d17.484290904606873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ab9aec640f%3A0xa9a53f886647f4c0!2sNexus%20Hyderabad!5e0!3m2!1sen!2sin!4v1667227593928!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myLocation"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>
                WE love to hear from you
            </h2>
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="normal">Submit</button>
        </form> 

        <div class="people">
            <div>
                <img src="../img/people/1.png" alt=""/>
                <p><span>John Doe</span>Senior Marketing Manager<br/> 
                Phone : +000 123 000 77 88<br/> Email:contact@gmail.com</p>
            </div>
            <div>
                <img src="../img/people/2.png" alt=""/>
                <p><span>William Smith</span>Senior Marketing Manager<br/> 
                Phone : +000 123 321 77 88<br/> Email:contact@gmail.com</p>
            </div>
            <div>
                <img src="../img/people/3.png" alt=""/>
                <p><span>Emma Stone</span>Senior Marketing Manager<br/> 
                Phone : +000 123 456 77 88<br/> Email:contact@gmail.com</p>
            </div>
        </div>

    </section>

    <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign up For NewsLetters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your email addresss"/> 
            <button class="normal">Sign Up</button>
        </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Contact
