import React, { useContext, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserProvider";
import "./Plant.css";
import emailjs from '@emailjs/browser';
import Navbar from "./NavBar";

export default function Plant() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9zw6gr', 'template_pmjvmpq', form.current, '37B_5sxiPgoP8OYWl')
      .then((result) => {
          console.log(result.text);
          console.log("order sent")
          form.current.reset();
          alert('Your order was placed. We will get back to you shortly!');
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="container">
      <Navbar />
      <div className="picture">
      </div>
      <div className="section">
      <h1 className="title">Pre Order</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
      <footer className="footer">
      <p className="footer-text">&copy; 2023 MLA Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
