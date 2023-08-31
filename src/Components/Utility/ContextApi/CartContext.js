const { createContext, useReducer } = require("react");
import reducer from './CartReducer'

const CartContext=createContext()


const initialState={
    cart:[],
    total_item:"",
    total_amount:"",
    shiping_fee: 5000,
}
const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const AddtoCart=(ids,price,name,image,amount,product,quantity)=>{
        dispatch({type:"ADD_TO_CART",payload:{ids,name,image,price,amount, quantity,product}})
    }; 
    return <CartContext.Provider value="">
        {children}
    </CartContext.Provider>
}

// const useCartContext=()=>{
//     return useContext(CartContext)
// }

export {CartProvider}