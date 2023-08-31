import React from 'react'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import "../../Cart/Dashboard/dashboard.style.css"

const Myaccount = () => {
  const navi=useNavigate();
    const name=localStorage.getItem('name');
  return (
    
    <div className='account-profile'>
 <h1> Hi {name} !! welcome to TechDips</h1>
     
      <h2 className='heading-profile'>Profile</h2>
      
      <div className='userDetails'>
        <h2>Name:{name}</h2>
      </div>
      <div className="dashboard-welcome">
               
                <button
                  onClick={() => navi("/")}
                  className="dashboard-btn-explr"
                >
                  Keep Shopping
                </button>
              </div>
      <Footer/>
    </div>
  )
}

export default Myaccount
