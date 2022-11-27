import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Shop from "./Components/Shop"
import Contact from "./Components/Contact"
import Login from "./Components/Login"
import Shipping from "./Components/Shipping"
import Payment from "./Components/Payment"
import Register from "./Components/Register"


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="cart/payment" element={<Payment/>}/>
          <Route path="cart/shipping" element={<Shipping/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
