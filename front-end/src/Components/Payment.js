import React,{useState} from 'react';
import axios from "axios";
//import "./pay.png";
import "./Payment.css"
import pay from "../img/pay/pay.png"
import { Link  } from 'react-router-dom';
function Payment() {

    const [user,setUser]=useState({
        name:"",
        email:"",
        address:"",
        city:"",
        state:"",
        zipcode:""

    })

    const handleChange= e =>{
        
        const {name,value}=e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const proceed=()=>{
    //     const {name,email,address,city,state,zipcode}=user
    //     console.log(user);
    //     if (name && email && address && city && state && zipcode){
    //         axios.post("http://localhost:9002/proceed",user).then(res=>{
    //             alert(res.data.message)
    //         })
    //     }
    //     else{
    //         alert("front Please fill all the fields")
    //     }
    // }
  return (
    <div>
      <div class="container">
        <form action="">
            <div class="row">
                <div class="col">
                    <h3 class="title">Billing Address</h3>
                    <div class="inputBox">
                        <span>full name:</span>
                        <input type="text" name='name' value={user.name}  placeholder="Name" onChange={handleChange}     />
                    </div>
                    <div class="inputBox">
                        <span>email:</span>
                        <input type="email" name='email' value={user.email}  placeholder="Email"  onChange={handleChange} />
                    </div>
                    <div class="inputBox">
                        <span>Address:</span>
                        <input type="text" name="address" value={user.address}  placeholder="Room number-Street-City" onChange={handleChange}  />
                    </div>
                    <div class="inputBox">
                        <span>city:</span>
                        <input type="text" name="city" value={user.city}  placeholder="City" onChange={handleChange} />
                    </div>
                    <div class="flex">
                        <div class="inputBox">
                            <span>state:</span>
                            <input type="text" name="state" value={user.state}   placeholder="india" onChange={handleChange}  />
                        </div>
                        <div class="inputBox">
                            <span>zip code: </span>
                            <input type="text" name="zipcode" value={user.zipcode}   placeholder="zip code"   onChange={handleChange} />
                        </div>
                    </div>
                    </div>

                    <div class="col">
                        <h3 class="title">Payment</h3>
                        <div class="inputBox">
                            <span>Cards accepted:</span>
                            <img src={pay}/>
                        </div>

                        <div class="inputBox">
                            <span>Name on the card:</span>
                            <input type="text" placeholder="Name" />
                        </div>
                        
                        <div class="inputBox">
                            <span>Credit card number:</span>
                            <input type="text" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div class="inputBox">
                            <span>Exp month:</span>
                            <input type="text" placeholder="January" />
                        </div>
                        <div class="flex">
                            <div class="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div class="inputBox">
                                <span>CVV : </span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                        </div>
            </div>

            <Link to="shipping"><input type="submit" value="proceed to checkout" class="submit-btn" /></Link>

            {/* Link to /shipping links to http//:localhost:3000/shipping             */}
        </form>
    </div>
    </div> 
  )
}

export default Payment