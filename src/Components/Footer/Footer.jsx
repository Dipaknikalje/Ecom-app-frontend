import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer_bar">
      <div className="Footer_bar_width">

<div className="container1">
      <div className="Con2">
        {/* <div className="logo"><DisplayIcon/></div> */}
      
      <div className="Con3">
          <div className="Copywrite">
            <h2 className='logo-name'>TEchDiPs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et inventore, nostrum dignissimos eaque earum sequi!</p>

          </div>
      </div>
      </div>
      <div className="contact">
        <h3>Follow us</h3>
        <div>
        <i class="fab fa-facebook"></i> Facebook
        </div>
        <div>
        <i class="fa-brands fa-instagram"></i> Instagram
        </div>
        <div>
        <i class="fa-brands fa-twitter"></i> Twitter
        </div>
        <div>
        <i class="fa-brands fa-youtube"></i> YouTube
        </div>
      </div>

      <div className="Reference">
        <h3 className="References">Consumer Policy</h3>
        <div><NavLink to="/accessories" className="link">AboutUs</NavLink></div>
        <div><NavLink to="/ipads" className="link" >Information</NavLink> </div>
        <div> <NavLink to="/mobile" className="link">Privacy & policy</NavLink> </div>
        <div> <NavLink to="/laptops" className="link">Terms & conditions</NavLink> </div>
        {/* <div> <NavLink to="/macbook" className="nav_link"> MacBook</NavLink> </div> */}
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
