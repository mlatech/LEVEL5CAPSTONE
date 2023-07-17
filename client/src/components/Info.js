import React, { useRef }from "react";
import "./Info.css"; // Import the CSS file for styling
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




import Navbar from "./NavBar";
export default function Info() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_23d7st8', 'template_gu2c46h', form.current, '37B_5sxiPgoP8OYWl')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          form.current.reset();
          alert('Your message was sent. We will get back to you shortly!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <Navbar />
      <section className='nav-img'>

      </section>  
      <section className="contact-us-section">
      <h1 className="contact-us-title">Contact Us</h1>
      

      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <div className="line"></div>
<div className="reviews">
  <h1 className="contact-us-title">Reviews</h1>
  <FontAwesomeIcon icon="fa-solid fa-star" />
  <div className="review">
  <p>Awesome plants, reasonably priced. If you are wanting heirloom verieties this is the place to come! -Tracy Kostallari</p>
  </div>
  <div className="review">
  <p>they were more helpful and polite than I ever could've hoped for!! so very knowledgable!! thank you so much for all your help and advice!! -Chris Kingrey</p>
  </div>
  <div className="review">
  <p>Great place, great plants and great people. what more can u ask for.. oh, great price!!! -Brandy Wilkins Beasly</p>
  </div>
  <div className="review">
  <p>great choice. friendly owners looking forward to going back. -Cathie Volz</p>
  </div>
  <div className="review">
  <p>I have been using elderberry juice from Tom Peppers General Store since December 2019. Despite having a compromised immune system I have not had one cold! I feel that this has been a huge reason for that. I would highly recommend anything Tom Peppers General Store sells. I also look forward to again planting some of the organic seedlings she sells. The vegetables they produce are delicious! -Cindi Pyper Runte</p>
  </div>
  <div className="review">
  <p>Good Plants...Good People...Get your Plan Needs There:) -Tony DeFilippo</p>
  </div>
  <div className="review">
  <p>Excellent plants and produce and friendly staff!! Love this place and the people! -Sheila Bragg</p>
  </div>
</div>
</section>
      <footer className="footer">
      <p className="footer-text">&copy; 2023 MLA Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

