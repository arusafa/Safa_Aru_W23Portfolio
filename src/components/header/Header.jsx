import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";

import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header id="home">
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Safa Aru</h1>
        <h5 className="text-light">I'm a Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div>
          <img src={ME} alt="me" className="me" />
        </div>
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
