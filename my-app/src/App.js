import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Shop from "./Components/Shop"
import Contact from "./Components/Contact"
import Login from "./Components/Login"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
