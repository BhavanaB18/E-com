import React,{useState} from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import "./Register.css"

const Register = () => {
    const [user,setUser]=useState({
        name:"",
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

    console.log(user)

    // const register=()=>{
    //     const {name,email,password,confirmpassword}=user
    //     if (name && email && password && (password===confirmpassword)){
    //         //alert("posted")
    //         axios.post("http://localhost:9002/register",user)
    //         .then(res=>{
    //             alert(res.data.message)
    //             //navigate("/login")
    //         })
    //     }
    //     else{
    //         alert("invalid input")
    //     }
       
    // }

  return (
    <div>    
       <NavBar/>
       <div className="register">
            {
                console.log('User',user)
            }
            <h1>Register</h1>
            <input type='text' name='firstname' value={user.firstname} placeholder="Enter your First Name" onChange={handleChange}></input>
            <input type='text' name='lastname' value={user.lastname} placeholder="Enter your Last Name" onChange={handleChange}></input>
            <input type='text' name='email' value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type='password' name='password' value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
            <input type='password' name='confirmpassword' value={user.confirmpassword} placeholder="Confirm Password" onChange={handleChange}></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button" ><Link to="/">Login</Link></div>
        </div>
    </div>
  )
}

export default Register
