import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from "/Users/karynachernyak/vschool/development/LEVEL-5/LEVEL5CAPSTONE/client/src/images/logo.jpg"; // Replace with the path to your logo image
import "./navbar.css"

export default function Navbar(props) {

  return (
    <div className="navbar">
    <div className="logo">
    <img src={logoImage} alt="Logo" className="logo-image" />
      <h3 className='h3'>Tom Peppers General Store</h3>
    </div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      {/* <Link to="/plants" className="nav-link">Pre Order</Link> */}
      <Link to="/info" className="nav-link">Contact</Link>
      
    </div>
    
  </div>
  );
}