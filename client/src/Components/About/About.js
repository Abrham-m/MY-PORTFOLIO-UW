import React from "react";
import "./About.css";
import profilePic from "../../Image/profilePic.jpg";
const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={profilePic} alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-detail">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <div className="about-text">
              <p>
                Hello, <br/>
                my name is Abrham Mengistu. I am an experienced Full
                Stack ( MERN Stack ) developer with expertise in React, Node.js,
                Express.js, and MongoDB. I have been working in this field for 2
                years and have successfully delivered several projects using
                these technologies. I am passionate about developing scalable
                and efficient web applications, and I have a deep understanding
                of the Node.js ecosystem. I have extensively worked with
                Express.js to build Restful APIs and have hands-on experience
                with MongoDB for database management. <br/>Furthermore, I have a
                strong understanding of server-side programming concepts, such
                as asynchronous programming, event-driven architecture, and
                caching techniques. I am also knowledgeable about security best
                practices and performance optimization. I have a proven track
                record of collaborating with cross-functional teams,
                communicating effectively, and delivering high-quality code
                within deadlines. I am constantly staying up-to-date with the
                latest trends and advancements in the backend development space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
