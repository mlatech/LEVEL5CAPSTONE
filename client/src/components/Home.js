import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserProvider";
import "./Home.css";

export default function Home(props) {
  const navigate = useNavigate();
  const { user: { username } } = useContext(UserContext);

  const handleExploreInventory = () => {
    navigate("/plants");
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">Tom Pepper's General Store</h1>
        <nav className="navigation">
  
      <Link to="/plants">Plants</Link>
      <Link to="/info">Info</Link>
          <button onClick={props.logout}>Logout</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{username ? `Hello, ${username}!` : null} Welcome to Tom Pepper's General Store</h1>
          
          <p className="hero-description">
            We are your one-stop shop for all your gardening needs. Whether you're a seasoned gardener or just getting started, our store offers a wide range of high-quality plants, seeds, and gardening supplies to help you create a vibrant and thriving garden.
          </p>
          {/* <button className="explore-button" onClick={handleExploreInventory}>
            Explore Our Inventory
          </button> */}
        </div>
      </section>

      <section className="announcements">
        <h2 className="announcements-title">Important Announcements</h2>
        <ul className="announcements-list">
          <li className="announcement">
            <h3 className="announcement-text">Tom Peppers will soon begin taking orders for chicks</h3>
          </li>
          <li className="announcement">
            <h3 className="announcement-text">Now taking orders for our heritage breed Turkeys</h3>
          </li>
        </ul>
      </section>

    </div>
  );
}


