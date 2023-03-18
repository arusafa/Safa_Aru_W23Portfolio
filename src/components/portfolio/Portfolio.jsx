import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/gbc-airlines.png";
import IMG2 from "../../assets/address-book.png";
import IMG3 from "../../assets/gbc-sporting.png";
import IMG4 from "../../assets/recipe-app.png";
import IMG5 from "../../assets/img5.jpg";
import IMG6 from "../../assets/img6.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>Airlines Booking System</h3>
          <small>
            ● Designed and implemented airport booking application in 3-person
            team using C#
            <br />● Enabled users to book and edit booking systems based on 50+
            mock airline tickets.
          </small>

          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/Gbc-Airlines-Booking"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>Address Management System</h3>
          <small>
            ● Designed and built a CRUD application system in JavaFX
            <br />● Enabled users to book and edit booking systems based on 20+
            mock addresses.
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/Address-book-project"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>GBC Sporting Management System</h3>
          <small>
            ● Designed and implemented a CRUD application system in a 4-person
            team using .NET
            <br />● Enabled users to book and edit booking systems based on 50+
            mock addresses.
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/GBC-SportingTeam_Amigos"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>GBC Recipe Management System</h3>
          <small>
            ● Designed and built a CRUD application system in Spring Boot
            <br />● Enabled users to book and edit booking systems based on 10+
            mock recipes.
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/GBC-Recipe-App"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>Employee Management System</h3>
          <small>
            ● A CRUD application system designed using Bootstrap.
            <br />● Developed with <b>Nodejs</b> for the back-end and{" "}
            <b>React</b> for the front-end.
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/101331910_comp3123_assignment2_frontend"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="portfolio item" />
          </div>
          <h3 style={{ color: "#A63D40" }}>Food Finder Application</h3>
          <small>
            ● Designed and built a CRUD application system using ReactNative
            <br />● Enabled users to book and edit booking systems based on 15+
            mock restaurants.
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
