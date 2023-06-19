import React from "react";
import "./Footer.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <a href="footer-logo" id="footer-logo" className="footer__logo">
        Safa - Portfolio - 2023
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/safaaru"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>

        <a
          href="https://instagram.com/safaaru"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/safaaru"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a href="https://github.com/arusafa" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      

      <p className="footer__copy">
        &copy; 2023 Safa Aru. All rights reserved.
      </p>
      <a href="#home" className="scroll__up">Scroll Up</a>
    </footer>
  );
}

export default Footer;
