import React,{useState} from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import "./Register.css"
import axios from "axios"

const Register = () => {
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const handleChange= e =>{   
        const {name,value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register=()=>{
        console.log("called")
        const {firstname,email,password,confirmpassword}=user
        if (firstname && email && password && (password===confirmpassword)){
            console.log("posted")
            axios.post("/users/register",user)
            .then(res=>{
                alert(res.data.message)
                //navigate("/login")
            })
        }
        else{
            console.log("'invalid")
            alert("invalid input")
        }
       
    }

  return (
    <div>    
       <NavBar/>
       <div className="register">
            <h1>Register</h1>
            <input type='text' name='firstname' value={user.firstname} placeholder="Enter your First Name" onChange={handleChange}></input>
            <input type='text' name='lastname' value={user.lastname} placeholder="Enter your Last Name" onChange={handleChange}></input>
            <input type='text' name='email' value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type='password' name='password' value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
            <input type='password' name='confirmpassword' value={user.confirmpassword} placeholder="Confirm Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" ><Link to="/">Login</Link></div>
        </div>
    </div>
  )
}

export default Register
