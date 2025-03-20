import React from "react";
import '../App.css';

const ContactForm = () => (
  <section className="contact-section">
    <h2 className="section-title">Contact Us</h2>
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default ContactForm;
