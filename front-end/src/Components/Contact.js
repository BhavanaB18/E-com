import React, { useState } from 'react'
// import "./Contact.css"
import "./style.css"
import NavBar from './NavBar'
import Footer from "./Footer"
import p1 from "../img/people/1.png"
import p2 from "../img/people/2.png"
import p3 from "../img/people/3.png"
import axios from 'axios'


function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [sub,setSub]=useState("")
    const [msg,setMsg]=useState("")
    
    const nameChange=(event)=>{
        setName(event.target.value)
    }
    const emailChange=(event)=>{
        setEmail(event.target.value)
    }
    const subChange=(event)=>{
        setSub(event.target.value)
    }
    const msgChange=(event)=>{
        setMsg(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
       const formdata={
        name:name,
        email:email,
        subject:sub,
        message:msg
       }
       console.log(formdata,"form")
        axios.post("/reviews",formdata).then((res)=>"record inserted").catch(err=>console.log("error"))
        
        setEmail("")
        setName("")
        setMsg("")
        setSub("")
    }
  return (
    <div>
      <NavBar/>
    <section className="about-header">
        
        <h2>#Let's Talk</h2>
        <p>Leave a Message,we would love to hear from you!</p>
       
    </section>

    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fal fa-map"></i>
                    <p>806,WTT Tower,Central Auto Market,Noida</p>
                </li>
                <li>
                    <i className="far fa-envelope"></i> 
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fal fa-phone-alt"></i>    
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fal fa-clock"></i>
                    <p>Monday to Saturday :10:00am to 22:00pm</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4861646278587!2d78.38670241409916!3d17.484290904606873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ab9aec640f%3A0xa9a53f886647f4c0!2sNexus%20Hyderabad!5e0!3m2!1sen!2sin!4v1667227593928!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="myLocation"></iframe>
        </div>
    </section>

    <section id="form-details">
        <form onSubmit={submitHandler} >
            <span>LEAVE A MESSAGE</span>
            <h2>
                WE love to hear from you
            </h2>
            <input type="text" placeholder="Your name" name="name" onChange={nameChange} value={name}/> 
            <input type="email" placeholder="E-mail" name="email" onChange={emailChange} value={email}/>
            <input type="text" placeholder="Subject" name="sub" onChange={subChange} value={sub}/>
            <textarea name="msg" id="" cols="30" rows="10" placeholder="Your Message" onChange={msgChange} value={msg}></textarea>
            <button className="normal" >Submit</button>
        </form> 

        <div className="people">
            <div>
                <img src={p1} alt=""/>
                <p><span>John Doe</span>Senior Marketing Manager<br/> 
                Phone : +000 123 000 77 88<br/> Email:contact@gmail.com</p>
            </div>
            <div>
                <img src={p2} alt=""/>
                <p><span>William Smith</span>Senior Marketing Manager<br/> 
                Phone : +000 123 321 77 88<br/> Email:contact@gmail.com</p>
            </div>
            <div>
                <img src={p3} alt=""/>
                <p><span>Emma Stone</span>Senior Marketing Manager<br/> 
                Phone : +000 123 456 77 88<br/> Email:contact@gmail.com</p>
            </div>
        </div>

    </section>

    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign up For NewsLetters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="email" placeholder="Your email addresss"/> 
            <button className="normal">Sign Up</button>
        </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Contact
