import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { add, getTotal } from '../Utility/Redux/cartSlice'

const AddToCart=({item})=> {
    const dispatch =useDispatch()
    const token = localStorage.getItem('token')

    const handleCart=(item)=>{ 
        if(token){
            dispatch(add(item))
            dispatch(getTotal())
        }else{
            toast.info("Please login first to enjoy shopping",
            {position: toast.POSITION.TOP_RIGHT})
        }
    }
   

  return (
    <div>
        <button onClick={()=>handleCart(item)}>Add to cart</button>
    </div>
  )
}

export default AddToCart