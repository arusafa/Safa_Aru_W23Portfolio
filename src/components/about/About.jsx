import React from "react";
import "./About.css";

import ME from "../../assets/me_about.jpeg";
import { BsAwardFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";

function About() {
  return (
    <section id="about" style={{ marginBottom: "10px" }}>
      <h5>Get To Know</h5>
      <h1>Who Am I</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <img src={ME} alt="about_me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Work Experiences</h5>
              <small>60+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <article className="about__card">
            <GrAchievement className="about__icon" />
            <h5>Career Goals</h5>
            <small>
              <BsCheckCircleFill className="experience__icon" />
              Expand knowledge and skills in front-end development: As a recent
              graduate with an Advanced Diploma in Computer Science, my first
              career goal is to continue to learn and grow my skills in
              front-end development. I plan to take online courses, attend
              workshops, and participate in relevant events to stay up-to-date
              with the latest industry trends and best practices.
            </small>
            <br />
            <small>
              <BsCheckCircleFill className="experience__icon" />
              Develop strong communication and collaboration skills: As a
              front-end developer, it's important to work closely with
              designers, project managers, and other developers to create
              high-quality web applications. Therefore, my goal is to develop
              strong communication and collaboration skills that will allow me
              to work effectively with different stakeholders and contribute to
              successful project outcomes.
            </small>
          </article>
          <br />

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
