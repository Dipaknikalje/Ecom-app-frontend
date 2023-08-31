import React from 'react'
import { useSelector } from 'react-redux'

const CheckCart = () => {
    const cartProducts=useSelector(state=>state.cart)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Check cart</h1>
    </div>
  )
}

export default CheckCart
