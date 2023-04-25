import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/gbc-airlines.png";
import IMG2 from "../../assets/address-book.png";
import IMG3 from "../../assets/gbc-sporting.png";
import IMG4 from "../../assets/recipe-app.png";
import IMG5 from "../../assets/employee-mng.jpeg";
import IMG6 from "../../assets/food-finder.jpeg";

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
            ● Collaborated with a 3-person team to design and implement a
            user-friendly airport booking application in C#, adhering to
            software development best practices and agile methodologies.
            <br />● Contributed to front-end development using WPF (Windows
            Presentation Foundation) to create an intuitive user interface,
            allowing users to seamlessly navigate through the booking process.
            <br />● Developed back-end functionality for handling user
            authentication, booking, and editing of reservation details,
            ensuring data integrity and security through the use of Entity
            Framework and SQL Server for database management.
            <br />● Enabled users to search, book, and modify reservations from
            a database of over 50 mock airline tickets, incorporating flight
            details, seat availability, and pricing information.
            <br /> ● Implemented a user-friendly interface for the admin to
            manage flight details, including adding, editing, and deleting
            flights from the database.
            <br /> ● Conducted rigorous testing and debugging to ensure a
            bug-free experience, resulting in a positive user feedback and an
            increase in overall booking efficiency.
            <br /> ● Utilized Git for version control and GitHub for project
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
            ● Collaborated with a team to design and build a JavaFX-based CRUD
            (Create, Read, Update, Delete) application system, following
            software development best practices and agile methodologies.
            <br />● Utilized JavaFX for front-end development, creating an
            intuitive and visually appealing user interface that streamlined the
            booking and editing processes.
            <br />● Implemented back-end functionality using Java and JDBC for
            database connectivity, managing user authentication, and handling
            the CRUD operations with a MySQL database to ensure data integrity
            and security.
            <br />● Enabled users to search, book, and modify reservations from
            a database of 20+ mock addresses, incorporating location details,
            availability, and pricing information to provide a seamless user
            experience.
            <br />● Integrated input validation and error handling to improve
            overall application reliability, leading to a more robust and
            user-friendly system.
            <br /> ● Utilized Git for version control and GitHub for project
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
            ● Collaborated with a 4-person team to design and implement a
            .NET-based CRUD (Create, Read, Update, Delete) application system,
            following software development best practices and agile
            methodologies.
            <br />● Utilized ASP.NET MVC for front-end development, creating a
            responsive and user-friendly interface that streamlined the booking
            and editing processes for various sporting events and venues.
            <br />● Developed back-end functionality using C# and Entity
            Framework for database connectivity, handling user authentication,
            and managing CRUD operations with a SQL Server database to ensure
            data integrity and security.
            <br />● Enabled users to search, book, and modify reservations from
            a database of 50+ mock addresses, incorporating venue details, event
            availability, and pricing information for an enhanced user
            experience.
            <br />● Integrated input validation and error handling to improve
            overall application reliability, leading to a more robust and
            user-friendly system.
            <br /> ● Utilized Git for version control and GitHub for project
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
            ● Collaborated with a team to design and build a Spring Boot-based
            CRUD (Create, Read, Update, Delete) application system for managing
            recipes, following software development best practices and agile
            methodologies.
            <br />● Utilized Thymeleaf and Bootstrap for front-end development,
            creating a responsive and visually appealing user interface that
            streamlined the process of adding, editing, and managing recipes.
            <br />● Developed back-end functionality using Java, Spring Boot,
            and Spring Data JPA for database connectivity, handling user
            authentication, and managing CRUD operations with a H2 in-memory
            database to ensure data integrity and security.
            <br />● Enabled users to search, add, edit, and delete recipes from
            a database of 10+ mock recipes, incorporating detailed recipe
            information such as ingredients, instructions, and nutritional facts
            for an enhanced user experience.
            <br />● Implemented input validation and error handling to improve
            overall application reliability, leading to a more robust and
            user-friendly system.
            <br /> ● Utilized Git for version control and GitHub for project
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
            ● Collaborated with a team to design and develop a full-stack CRUD
            (Create, Read, Update, Delete) application system for managing
            employees, following software development best practices and agile
            methodologies.
            <br />● Utilized Bootstrap for front-end development, creating a
            responsive and user-friendly interface that streamlined the process
            of adding, editing, and managing employee records.
            <br />● Developed the front-end using React, implementing state
            management with Redux and reusable components to optimize
            performance and maintainability.
            <br /> ● Implemented back-end functionality using Node.js and
            Express, handling user authentication, RESTful API design, and CRUD
            operations for managing employee data.
            <br /> ● Integrated MongoDB as a NoSQL database solution, using
            Mongoose for schema modeling and data validation, ensuring data
            integrity and security.
            <br /> ● Implemented input validation and error handling on both
            front-end and back-end to improve overall application reliability,
            leading to a more robust and user-friendly system.
            <br /> ● Utilized Git for version control and GitHub for project
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
            ● Collaborated with a team to design and develop a mobile CRUD
            (Create, Read, Update, Delete) application system for finding and
            booking restaurants, following software development best practices
            and agile methodologies.
            <br />● Utilized React Native for cross-platform mobile app
            development, creating a responsive and user-friendly interface that
            streamlined the process of searching, booking, and managing
            restaurant information as well as rates on Yelp.
            <br />● Developed reusable components and implemented state
            management using Redux, optimizing performance and maintainability
            across both Android and iOS platforms.
            <br />● Enabled users to search, add, edit reviews, from a database
            of 80+ mock restaurants, incorporating detailed information such as
            location, cuisine, pricing, and availability for an enhanced user
            experience.
            <br /> ● Utilized Git for version control and GitHub for project
          </small>
          <div style={{ marginTop: "1rem" }} className="portfolio__item-cta">
            <a
              href="https://github.com/arusafa/FoodFinder"
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
