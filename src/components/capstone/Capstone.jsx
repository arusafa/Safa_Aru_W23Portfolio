import React from "react";
import "./Capstone.css";

function Capstone() {
  return (
    <section id="portfolio">
      <h5>My Capstone Work</h5>
      <h2>Capstone</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Summary</h3>
          <small>summary of the project</small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Vision</h3>
          <small>vision of the project</small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Requirements</h3>
          <small>requirements of the project</small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Plan</h3>
          <small>plan of the project</small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Project Status</h3>
          <small>report of the project</small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>System Implementation</h3>
          <small>implementation of the project</small>
        </article>
      </div>
    </section>
  );
}

export default Capstone;
