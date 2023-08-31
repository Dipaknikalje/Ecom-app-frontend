import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './bestseller.css'
import { useDispatch } from 'react-redux';
import { add } from '../Utility/Redux/cartSlice';
import { NavLink } from 'react-router-dom';
const BestSeller = () => {
    const [data,setData]=useState([]);
    const dispatch=useDispatch()

    useEffect(()=>{
        axios.get('https://techdips-com.onrender.com/products/fetchbycat/accessories')
        .then((res)=>{
            setData(res.data.result)
            
        })
    })
    const addToCart=(post)=>{
      dispatch(add(post))
    }
  return (
    <div className='bestseller'>
      {data.slice(0,9).map((post)=>{
        const {ids,name,image,ratting,price,oPrice}=post
        return(
          
            <div className='bestseller-data'>
              <NavLink to={`/article/${ids}`}>
                <img src={image}
                width={200}
                height={200}
                alt='images not found'
                />
           <div className='bestseller-data-content'>
            <h3>{name}</h3>
            <img src={ratting}
                 width={100}
                 height={50}
                 alt='images not found'
                 />
             <p className='price'>{price}...</p>
             <br />

             <p className='mrp'>{oPrice}</p>
              <br/>
              </div>
              </NavLink>
              <button className='btn' onClick={()=>addToCart(post)}>Add to cart</button>
              
             
            </div>
        )
      })}
    </div>
  )
}

export default BestSeller
