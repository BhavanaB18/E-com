import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import axios from "axios"
import { UserState } from '../context/UsersContext/UserContexts'


const Login=()=> {
    const navigate=useNavigate()

    let response=UserState()
    let user1=response.state.user
    let dispatch=response.dispatch
    const [user,setUser]=useState({
        
        email:"",
        password:""
    })

    const handleChange= e =>{
        
        const {name,value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    let message=""
    const login = () => {
        axios.post("/users/login", user)
        .then(res => {
            alert(res.data.message)
            if (res.data.message==="Login Successful"){
              navigate("/home")
            }
            else if (res.data.message==="User not registered"){
              navigate("/register")
            }
            else{
              navigate("/")
            }
            console.log(message)
            dispatch({
              type:"ADD_USER",
              payload:{...res.data.user}
            })
            //navigate("/")
            // res.redirect('http://localhost:3000/home')
            // console.log("current user",user1)
        })
      
    }

    console.log(user1,"current user")

  return (
    <>
    <NavBar/>
    <div className="main">
      <div className="login">
            {/* {console.log(user)} */}
            <h1>Login</h1>
            <input type='text' name='email' value={user.email} onChange={handleChange} placeholder="Enter your Email" ></input>
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder="Enter Password" ></input>
            <div className="button" onClick={login} >Login</div>
            <div>or</div>
            <div className="button" ><Link to="/register">Register</Link></div>   
        </div>
    </div>
    </>
  )
}

export default Login
