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
       
        <h1 className="navbar-title">Gardening Tips and Tricks</h1>
      </nav>
      <div className="text-container">
      <h2 className="info-text">At Tom Pepper's General Store, we believe that everyone can experience the joy and satisfaction of nurturing their own piece of nature. Join our gardening community and unlock a world of inspiration and knowledge. Get ready to dig in, get your hands dirty, and watch your garden flourish with our invaluable tips and tricks. Happy gardening!</h2>
      </div>
      <div>
        <h1>Select the Right Container</h1>
        <h3>Containers come in all shapes, sizes, colors, and composition, from sturdy terra-cotta cauldrons and eye-catching ceramic pots to half-barrels crafted from wood. Select the style that suits you best, but make sure the container has at least one hole in the bottom to ensure proper drainage. Also pay attention to your priorities when you’re considering container size—large containers allow you to grow a greater variety of plants, while smaller ones promote portability.</h3>
      </div>
      <div>
        <h1>Use Enriched Potting Soil</h1>
        <h3>Plants in containers need soil that allows roots to grow easily—it should be fast-draining yet moisture-retentive. Quick drainage helps ensure plant roots won’t rot in too-soggy soil, while good moisture retention decreases the amount of time you’ll spend watering in the first place. Organic potting soil mixed with a healthy amount of compost is ideal; the compost will add nutrients your plants need to flourish.</h3>
      </div>
      <div>
        <h1>Monitor Soil Moisture</h1>
        <h3>Striking the right balance between moisture and drainage is key for plants in pots. Because they have a fixed amount of soil from which to draw moisture, container-grown plants require more frequent watering than those grown in the ground. But over-watering can also pose a danger to potted plants. What’s a good rule of thumb for assessing if your plants are thirsty? If the top inch or two of soil feels dry, give them a drink. (Remember, plants in indirect light or shade retain water longer than plants located in full sun.)</h3>
      </div>
      <div>
        <h1>Dont Forget the Sunlight</h1>
        <h3>Just like plants in the ground, plants in containers need sunlight in order to thrive. Unlike plants in the ground, it’s easier to address those sunlight needs because potted plants are portable. If your plants aren’t getting adequate light, just move them to an area that offers them the sun they need.</h3>
      </div>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Tom Pepper's General Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

