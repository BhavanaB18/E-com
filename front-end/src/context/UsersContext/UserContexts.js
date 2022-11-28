import React,{createContext,useContext,useReducer} from 'react'
import { UserReducer } from './UserReducers'
const currUser=createContext()

const UserContexts = (props) => {
  const [state,dispatch] = useReducer(UserReducer,{user:[]})
  return (
    <div>
       <currUser.Provider value={{state,dispatch}}>
        {props.children}
       </currUser.Provider>      
    </div>
  )
}

export default UserContexts

export const UserState=()=>{
    return useContext(currUser)
  }

