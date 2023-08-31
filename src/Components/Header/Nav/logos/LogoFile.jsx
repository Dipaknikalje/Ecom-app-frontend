import React, { useState } from 'react'
import './logo.css'
import Profile from '../../../Auth/Profile/Profile'
import { NavLink, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
const LogoFile = () => {
  const [showButton,setShowButton]=useState(false)
  const [search,setSearch]=useState('')
  const cart=useSelector(state=>state.cart);
  const cartCount = cart.cartTotalQuantity
  const navi=useNavigate();

  const searchHandle=(event)=>{
    event.preventDefault()
    // console.log(search)
    navi('/search',{state:search})
    setSearch("") 
  }
  const handleClick=()=>{
    setShowButton(!showButton);
    
  }
  const handleHover=()=>{
    setShowButton(false)
  }
  return (
    <div className='nav-logo'>
      <ul>
          <li>
          <i class="fa fa-search" id="search" aria-hidden="true" onClick={searchHandle}></i>
          </li>
          <li><input type="search" className='searchbar' value={search} placeholder='...search' onChange={(event)=>{setSearch(event.target.value)}}/>
</li><div className='cart-profile'>
        <NavLink to="/cart" id='cart'><i class="fa fa-shopping-cart"  aria-hidden="true"></i><span class='products'>{cartCount}</span></NavLink>
        <button id='profile' onClick={handleClick}><i class="fa fa-user"  aria-hidden="true" onMouseOver={handleHover}></i></button>
        </div>
      </ul>
      <div>{showButton && <Profile/> }</div>

    </div>
    
  )
}

export default LogoFile
