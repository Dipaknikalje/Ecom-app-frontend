import React from 'react'
import './button.css'
import { NavLink } from 'react-router-dom'
// import { useLogin } from '../../../Utility/LoginProvider'

const Buttons = () => {
//   const {state,dispatch}=useLogin()

  const handleClick=()=>{
    // dispatch({type:"USER" , payload:false})
    localStorage.clear()
    window.alert("logout successfully")
  }

  const RenderButton=()=>{
    if (localStorage.getItem.loggedIn===true){
      return(
        <>
          <div className='btn-ctn-profile'>
        <input type="checkbox" id="checkprofile"/>
        <label for="checkprofile">
        <i class="fa fa-user" id="profile"> </i>
        <div className='profile-data'>
          <div className='center-content'>
          <p id="name" >{localStorage.getItem("name")}</p>
        <button id="logout"><NavLink to="/login" onClick={handleClick}>Logout</NavLink>  </button>
        </div>
        </div>
        </label>
        </div>         
        </>
      )
    }
    else{
      return (
        <div>
          <div className="btn-ctn">
            <button className="btn"><NavLink to='/login'>Login</NavLink></button>
          </div>
        </div>
      )

    }
  }
  return (
    <>
    <RenderButton/>
    </>
  )
 
}

export default Buttons
