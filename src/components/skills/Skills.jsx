import React from "react";
import "./Skills.css";

import {BsCheckCircleFill} from "react-icons/bs";

function Skills() {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3 style={{marginBottom:"1rem", color:"black"}}>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>HTML / Bootstrap / CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>VueJs</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>.Net Core</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>AngularJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3 style={{marginBottom:"1rem", color:"black"}}>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>C#</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>MySQL-SQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsCheckCircleFill className="experience__icon" />
              <div>
              <h4>GraphQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>


        
      </div>
    </section>
  );
}

export default Skills;
