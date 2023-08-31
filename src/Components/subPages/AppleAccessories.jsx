import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import AddToCart from '../Cart/AddtoCart'

const AppleAccessories = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('https://techdips-com.onrender.com/products/fetchbysubcat/apple')
        .then((res)=>{
            setData(res.data.result)
        })
    })
    
  return (
    <>
    <div className='alldata'>
      {data.map((post)=>{
        const {ids,name,image,price,oPrice,ratting}=post
        return(
            <>
            <div className='main-content'>
         <NavLink to={`/article/${ids}`}>

                       <img
                         src={image}
                         width={200}
                         height={200}
                         alt={"img not found"}
                       />
 
                       <div className="content">
                         <h3 className="cotent-tittle">{name}</h3>
                         <br />
                         <img src={ratting} alt='images not found' width="100px" height="50px"></img>
                         <br />
 
                         <p className='price'>{price}...</p>
                         <br />
 
                         <p className='mrp'>{oPrice}</p>
                         <br/>
                         </div>
                         </NavLink>
                         <div className='btn-cart'>
                          <AddToCart item={post} />
                      </div>
                       
         </div>
            </>
        )
        })}
       
    </div>
    <Footer/>
    </>
  )
}

export default AppleAccessories
