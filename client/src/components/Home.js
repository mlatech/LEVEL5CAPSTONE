import  React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserProvider";
import "./Home.css";
import Navbar from "./NavBar";


export default function Home(props) {
  const navigate = useNavigate();

  return (
  
    <div className="home-container">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
       
        </div>
      </section>
      <section className="about-us-section">
        <h1 className="about-us-title">About us</h1>
        <p className="about-us-content">Welcome to Tom Pepper's General Store! We take pride in being a trusted destination for all your gardening needs. We are a family farm and seasonal greenhouse offering heirloom and hybrid veriety seedlings. With a passion for nurturing green spaces, we strive to provide our customers with exceptional products and expert guidance. Feel free to browse our site, or if your in the area...come visit us during our working hours! </p>
        <p>~~~Happy Gardening!!~~~</p>

       
        <h1 className="about-us-title">Seasonal Business Hours</h1>
        <h4 className="about-us-content">Monday - Friday    8am-8pm</h4>
        <h4 className="about-us-content">Saturday - Sunday    8am-8pm</h4>
      
      </section>
      <section className="announcements">
        <h2 className="announcements-title">Important Announcements</h2>
        <ul className="announcements-list">
          <li className="announcement">
            <h3 className="announcement-text">Zoom classes coming soon: "How To Preserve Your Harvest"</h3>
          </li>
          <li className="announcement">
            <h3 className="announcement-text">Now taking orders for our heritage breed Turkeys</h3>
          </li>
        </ul>
      </section>
      <footer className="footer">
  <p className="footer-text">
    &copy; 2023 <a href="https://karynasportfolio.netlify.app/" className="portfolio-link">MLA Technologies</a>. All rights reserved.
  </p>
</footer>

    </div>
  );
}
