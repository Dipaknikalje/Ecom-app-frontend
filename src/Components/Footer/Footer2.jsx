import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer2 = () => {
    return (
        <div className="Footer_bar">
          <div className="Footer_bar_width">
    
    <div className="container1">
          <div className="Con2">
            {/* <div className="logo"><DisplayIcon/></div> */}
          
          <div className="Con3">
              <div className="Copywrite">
                <span>©</span>2023.TechDips. All Rights reserved
              </div>
          </div>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <div>
              <i class="fa fa-location"></i> Hinjewadi, Pune.
            </div>
            <div>
              <i class="fa fa-mobile"></i> +91 7972546650
            </div>
            <div>
              <span>✉</span> support@techdips.com
            </div>
          </div>
    
          <div className="Reference">
            <h3 className="References">References</h3>
            <div><NavLink to="/accessories" className="link">Accessories</NavLink></div>
            <div><NavLink to="/ipads" className="link" >Ipads</NavLink> </div>
            <div> <NavLink to="/mobile" className="link">Mobile</NavLink> </div>
            <div> <NavLink to="/laptops" className="link">Laptops</NavLink> </div>
            {/* <div> <NavLink to="/macbook" className="nav_link"> MacBook</NavLink> </div> */}
          </div>
          </div>
    </div>
        </div>
      );
}

export default Footer2
