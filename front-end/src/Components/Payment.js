import React,{useState} from 'react';
import axios from "axios";
//import "./pay.png";
import "./Payment.css"
import pay from "../img/pay/pay.png"
import { Link  } from 'react-router-dom';
import { UserState } from '../context/UsersContext/UserContexts';
import { CartState } from '../context/ProductsContext/Contexts';
function Payment() {
    const response=CartState()
    let cart=response.state.cart
    let responseuser=UserState()
    let user=responseuser.state.user
    let [order,setOrder]=useState({
        address:"",
        zipcode:"",
    })
    let total=0
    cart.map((item)=>{
        return total+=(item.discount_p*item.qty)
    })
    // console.log("total from payment",total)

    const handleChange= e =>{
        
        const {name,value}=e.target
        setOrder({
            ...order,
            [name]: value
        })
        // console.log(order,"from payment")
    }

    // console.log(total,"from payment page")


    const proceed=()=>{
        const {address,zipcode}=order
        order={user_id:user[0]._id,...order,total:total}
        // console.log(order,address,zipcode);
        if ( address && zipcode){
            axios.post("/order/proceed",order).then(res=>{
                alert(res.data.message)
            })
        }
        else{
            alert("front Please fill all the fields")
        }
    }
  return (
    <div>
      <div class="container">
        <form action="">
            <div class="row">
                <div class="col">
                    <h3 class="title">Billing Address</h3>
                    <div class="inputBox">
                        <span>full name:</span>
                        <input type="text" name='name' placeholder="Name" />
                    </div>
                    <div class="inputBox">
                        <span>email:</span>
                        <input type="email" name='email'  placeholder="Email" />
                    </div>
                    <div class="inputBox">
                        <span>Address:</span>
                        <input type="text" name="address" value={order.address}  placeholder="Room number-Street-City" onChange={handleChange}  />
                    </div>
                    <div class="inputBox">
                        <span>city:</span>
                        <input type="text" name="city" placeholder="City" />
                    </div>
                    <div class="flex">
                        <div class="inputBox">
                            <span>state:</span>
                            <input type="text" name="state" placeholder="Telanagana" />
                        </div>
                        <div class="inputBox">
                            <span>zip code: </span>
                            <input type="text" name="zipcode" value={order.zipcode}   placeholder="zip code"   onChange={handleChange} />
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

            <Link to="shipping"><input type="submit" value="proceed to checkout" class="submit-btn" onClick={proceed} /></Link>

            {/* Link to /shipping links to http//:localhost:3000/shipping             */}
        </form>
    </div>
    </div> 
  )
}

export default Payment