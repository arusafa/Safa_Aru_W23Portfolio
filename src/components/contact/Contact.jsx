import React from "react";
import "./Contact.css";

import {MdAlternateEmail} from 'react-icons/md';
import {FaWhatsappSquare} from 'react-icons/fa';
import {CiFacebook} from 'react-icons/ci';
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yy46jlu', 'template_q6sg1m7', form.current, 'a5pOztiEjMO0Hia2i')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAlternateEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>arusafacollege@gmail.com</h5>
            <a href="mailto:arusafacollege@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <CiFacebook className="contact__icon" />
            <h4>Messenger</h4>
            <h5>safaaru</h5>
            <a href="https://m.me/safa.aru" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsappSquare className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>437-987-0592</h5>
            <a href="https://api.whatsapp.com/send?phone=4379870592" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Enter a Full Name" required />
          <input type="email" name="email" placeholder="Enter an Email" required />
          <textarea name="message" placeholder="Enter a message" rows='8' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
