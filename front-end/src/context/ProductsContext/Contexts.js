import {createContext,useState,useEffect } from 'react'
import axios from 'axios';

const Cart=createContext();

const Contexts = (props) => {
  const [products,setProducts]=useState([])
  const [num,setNum]=useState(0)
  
  const myTimeout = setTimeout(mycnt, 1);

  function mycnt() {
      if(num<1){
      setNum(num+1);
      }
      else{
          clearTimeout(myTimeout);
      }
  }
   useEffect(()=>{
      axios.get("http://localhost:5000/products").then(response=>{
      console.log("data from response",response.data)
      setProducts(response.data)
      console.log("products",products)
     })

   },[num])
  return (
    <>
    {  products.length?
      <Cart.Provider value>
        {props.children}
      </Cart.Provider>
    :console.log("sorry")}
    </>
  )
}

export default Contexts
