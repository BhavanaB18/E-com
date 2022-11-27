export const CartReducer = (state,action) => {
  switch(action.type){
    case "ADD_TO_CART":
      return {cart:[...state.cart,{...action.payload,qty:1}]};
    case "REMOVE_FROM_CART":
      return {cart:state.cart.filter((c)=>
        c._id!==action.payload._id
      ),};
    case "CHANGE_CART_QTY":
      return {cart:state.cart.filter((c)=>c._id===action.payload._id ? c.qty=action.payload.qty:c.qty),};
    default:
    return state;
  }
}


