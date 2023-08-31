import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
import LogoFile from './logos/LogoFile'
const NavBar = () => {
  return (
    <>
    <div>
    <div className='logo'>
        <h1 className='logo-name'>TEchDiPs</h1>
        </div>
      <nav>
        <input type="checkbox" id="check"/>
        <div className='label'>
        <label for="check">
       <i class="fas fa-bars" id="btn"></i>
       <i class="fas fa-x" id="cancel"></i>
        </label>
        </div>
        
        <ul className='main-nav-list'>
          <li className='active'>
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
            <div classname="dropdown-list">
                <ul className='list'>
                <li><NavLink className="drpdwn-link" to='/accessories'>Accessories</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/mobiles'>Mobiles</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/ipad'>Ipad</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/laptops'>Laptop</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/macbook'>MacBook</NavLink></li>

                </ul>
              </div>
          </li>
          
          <li className='active'>
            <NavLink to="/accessories" className="nav_link">
              Accessories
            </NavLink>
            <div classname="dropdown-list">
                <ul className='list'>
                  <li><NavLink className="drpdwn-link" to='/appleaccessories'>Apple</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/boat'>Boat</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/scandisk'>Scandisk pendrive</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/hp'>HP pendrives</NavLink></li>
                </ul>
              </div>
          </li>
       
          <li className='active'>
            <NavLink to="/mobiles" className="nav_link">
              Mobiles
            </NavLink>
             <div classname="dropdown-list">
                <ul className='list'>
                  <li><NavLink className="drpdwn-link" to='/oneplus'>ONE PLUS</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/samsung'>SAMSUNG</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/redmi'>REDMI</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/asus'>ASUS</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/pixel'>PIXEL</NavLink></li>
                </ul>
            </div>

          </li>
          <li className='active'>
            <NavLink to="/ipad" className="nav_link">
              Ipad
            </NavLink>
              <div classname="dropdown-list">
                <ul className='list'>
                  <li><NavLink className="drpdwn-link" to='/ipadair'>Ipad Air</NavLink></li>
                  <li><NavLink className="drpdwn-link" to='/ipadpro'>Ipad Pro</NavLink></li>
                 
                </ul>
              </div>
          </li>
          <li className='active'>
            <NavLink to="/laptops" className="nav_link">
              Laptops
              </NavLink>
              <div classname="dropdown-list">
                <ul className='list'>
                  <li><NavLink to='/asuslaptop' className="drpdwn-link" >Asus</NavLink></li>
                  <li><NavLink to='/delllaptop' className="drpdwn-link" >Dell</NavLink></li>
                  <li><NavLink to='/hplaptop' className="drpdwn-link" >HP Laptops</NavLink></li>
                  <li><NavLink to='/lenovelaptop' className="drpdwn-link" >Lenove</NavLink></li>
                </ul>
              </div>
          </li>
          <li className='active'>
            <NavLink to="/macbook" className="nav_link">MacBook</NavLink>
              <div classname="dropdown-list">
                <ul className='list'>
                  <li><NavLink to='/macbookapple' className="drpdwn-link" >Apple Macbook</NavLink></li>
                  <li><NavLink to='/macbookair' className="drpdwn-link" >Macbook Air</NavLink></li>
                </ul>
              </div>
          </li>
        </ul>
      </nav>
      <LogoFile/>
    </div>
    </>
  )
}

export default NavBar
