
import { useContext,createContext } from 'react'

const Cart=createContext();

const Contexts = () => {
  return (
    <div>
      <Cart.Provider>
        {props.children}
      </Cart.Provider>
    </div>
  )
}

export default Contexts
