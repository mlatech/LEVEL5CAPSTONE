import React from "react";
import { Link } from "react-router-dom";
import "./Info.css"; // Import the CSS file for styling
import {useNavigate} from 'react-router-dom'; 

export default function Info() {
    const navigate = useNavigate() 
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Info"
            className="navbar-image"
          />
        </Link>
        {/* Other navigation items */}
        <h1 className="navbar-title">Gardening tips and tricks</h1>
      </nav>
      <div className="text-container">
      <h2 className="info-text">At Tom Pepper's General Store, we believe that everyone can experience the joy and satisfaction of nurturing their own piece of nature. Join our gardening community and unlock a world of inspiration and knowledge. Get ready to dig in, get your hands dirty, and watch your garden flourish with our invaluable tips and tricks. Happy gardening!</h2>
      </div>
    </div>
  );
}

