import React from "react";
import "./Capstone.css";
import { ImRadioChecked } from "react-icons/im";
import { ImRadioChecked2 } from "react-icons/im";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
  TbHexagonNumber6,
  TbHexagonNumber7,
} from "react-icons/tb";
import { BsFillStarFill } from "react-icons/bs";

import homePic from "../../assets/home-page.png";
import featuresPic from "../../assets/features-page.png";
import signUpPic from "../../assets/signup-page.png";
import aboutPic from "../../assets/about-page.png";

function Capstone() {
  return (
    <section id="capstone">
      <h5>My Capstone Work</h5>
      <h2>Online Tutoring Web</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>Project Summary</h3>
          <small>
            <ImRadioChecked /> &nbsp; Our web application is designed to enhance
            collaboration between users by providing a variety of features to
            facilitate communication, learning, and networking. The
            application's three main features include a video group chat,
            resources for learning, and a personal blog for showcasing
            individual achievements and connecting with like-minded individuals.
            In addition, our platform includes a whiteboard tool that enables
            tutors to communicate concepts and ideas more effectively.
            <br />
            <ImRadioChecked /> &nbsp; Tutors will also have access to free
            administrative tools, which are funded by student payments for the
            cloud service. Students will pay for the entire cloud service and we
            will take a commission from their payments to compensate tutors. Our
            matchmaking algorithm will recommend tutor profiles to students
            based on their blog profiles, promoting a more personalized and
            effective learning experience.
            <br />
            <ImRadioChecked /> &nbsp; With our platform, users can connect with
            others who share similar interests and goals, while also gaining
            access to valuable resources and tools to support their learning and
            collaboration efforts.
          </small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>Project Vision</h3>
          <small>
            <ImRadioChecked2 /> &nbsp; Our Online Tutoring web platform
            addresses the problem of expensive and inadequate tutoring services
            for students. Our platform offers affordable and effective
            one-on-one tutoring with expert tutors in a secure online
            environment.
            <br />
            <ImRadioChecked2 /> &nbsp; Online Tutoring web features an online
            library, whiteboards for video chats, digital resources, and
            personal blogs for students and tutors. Strengths include
            personalized sessions, a range of features, affordability, and
            security.
            <br />
            <ImRadioChecked2 /> &nbsp; Weaknesses include a small initial
            customer base and competition from established players.
            Opportunities include the growing demand for online tutoring and
            global expansion.
          </small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>Project Plan</h3>
          <small>
            <IoCheckmarkDoneCircleSharp /> &nbsp; Our online tutoring platform
            offers instant help for students in need, with tutors available
            24/7. The platform includes a tutor connection feature that shows
            which tutors are currently online and available, as well as a menu
            for easy navigation.
            <br />
            <IoCheckmarkDoneCircleSharp /> &nbsp; Students have access to an
            online library, which includes helpful techniques for both students
            and tutors, as well as tips on building good study habits. The
            platform also provides a whiteboard feature with drawing tools such
            as shapes, pencils, and the ability to add textbook page images.
            <br />
            <IoCheckmarkDoneCircleSharp /> &nbsp; Personal user blogs allow
            students to share their achievements and connect with others taking
            similar courses. A digital library is also available for students to
            store and access their notes. The platform offers an online
            collaboration solution for group work.
            <br />
            <IoCheckmarkDoneCircleSharp /> &nbsp; User authentication is
            available through popular social media accounts such as Google,
            Facebook, GitHub, and LinkedIn. Payment processing is provided
            through Google Pay, Interact Visa, and PayPal, and a chat support
            feature is available for any technical or billing issues.
            <br />
            <IoCheckmarkDoneCircleSharp /> &nbsp; A "Contact Us" page is
            available for any questions or concerns, and the online tutoring
            webpage includes functionality for user login, registration,
            payment, and video chat with selected tutors. Tutor profiles and
            notifications are provided, as well as a whiteboard feature for
            tutors.
            <br />
            <IoCheckmarkDoneCircleSharp /> &nbsp; User profiles include the
            ability to deactivate accounts, and tutors have access to a payment
            receiving and rating system. An Android and iOS application is
            available, and an administration panel allows for easy management of
            the platform.
          </small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>Project Requirements</h3>
          <small>
            <HiOutlineShieldCheck /> &nbsp; The Online Tutoring web application
            presents detailed information on the Online Tutoring web
            application, outlining its purpose, features, and interfaces. The
            application is designed to provide students with a platform for
            maximizing their productivity and educational potential, offering
            tools to get help with online homework assignments and giving tutors
            the flexibility to work with students on their homework.
            <br />
            <HiOutlineShieldCheck /> &nbsp; The software features communication
            tools, including video chat, email, and chat support, to facilitate
            interaction between tutors and students. The software also includes
            an admin page for administrators to modify the application as
            needed.
            <br />
            <HiOutlineShieldCheck /> &nbsp; The Online Tutoring web application
            is intended for stakeholders and developers of the Online Tutoring
            web application. Its purpose is to explain the constraints under
            which the software must operate and how it will respond to external
            uses. The Online Tutoring web application is specifically designed
            to meet the needs of students who require help with their homework
            projects.
          </small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>System Implementation</h3>
          <small>
            <TbHexagonNumber1 style={{ scale: "1.5" }} /> &nbsp; React: React is
            a JavaScript library used for building user interfaces. It allows
            developers to create reusable UI components that can be used across
            different pages of a web application. React also provides a way to
            manage the state of an application, making it easier to keep track
            of changes to the UI and respond to user interactions in real time.
            <br />
            <TbHexagonNumber2 style={{ scale: "1.5" }} /> &nbsp; JavaScript:
            JavaScript is a programming language used to add interactivity and
            dynamic functionality to web pages. It's used to manipulate the DOM
            (Document Object Model), which is the structure that defines how web
            pages are displayed in a browser.
            <br />
            <TbHexagonNumber3 style={{ scale: "1.5" }} /> &nbsp; Socket.io:
            Socket.io is a JavaScript library used for real-time communication
            between a client and a server. It's often used for building chat
            applications or multiplayer games where users need to interact with
            each other in real time
            <br />
            <TbHexagonNumber4 style={{ scale: "1.5" }} /> &nbsp; O-auth: OAuth
            is an open standard for authentication that allows users to log in
            to an application using their credentials from another service, such
            as Google or Facebook. This simplifies the authentication process
            and reduces the need for users to remember multiple usernames and
            passwords.
            <br />
            <TbHexagonNumber5 style={{ scale: "1.5" }} /> &nbsp; Mongo: MongoDB
            is a query language used for APIs (Application Programming
            Interfaces). It allows clients to specify the data they need, rather
            than the server dictating the data that's returned. This can make
            API requests more efficient and reduce the amount of data that needs
            to be transferred over the network.
            <br />
            <TbHexagonNumber6 style={{ scale: "1.5" }} /> &nbsp; CSS: CSS
            (Cascading Style Sheets) is a language used to describe the style
            and layout of web pages. It's used to define the colors, fonts, and
            other visual elements of a web page.
            <br />
            <TbHexagonNumber7 style={{ scale: "1.5" }} /> &nbsp; Bootstrap:
            Bootstrap is a popular framework for building responsive web pages.
            It includes pre-built CSS and JavaScript components that can be
            easily customized to fit the design of a web application. It's often
            used to make sure that a web page looks good on all devices, from
            desktops to mobile phones.
          </small>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3 style={{ color: "#A63D40" }}>Mock-ups</h3>
          <small>
            <BsFillStarFill /> &nbsp; Home Page
            <img src={homePic} alt="Sign Up Page" style={{ width: "100%" }} />
            <BsFillStarFill /> &nbsp; About Page
            <img src={aboutPic} alt="Sign Up Page" style={{ width: "100%" }} />
            <BsFillStarFill /> &nbsp; Sign Up Page
            <img src={signUpPic} alt="Sign Up Page" style={{ width: "100%" }} />
            <BsFillStarFill /> &nbsp; Features Page
            <img
              src={featuresPic}
              alt="Sign Up Page"
              style={{ width: "100%" }}
            />
          </small>
        </article>
      </div>
    </section>
  );
}

export default Capstone;
