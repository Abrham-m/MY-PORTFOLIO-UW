import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import my_cv from "./CV Abrham Mengistu.pdf";

export const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-container">
        <h1>Hi I am</h1>
        <h1 className="name">Abrham Mengistu</h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Backend Web Developer", "Node JS Developer"],
              autoStart: true,
              loop: true,
              pauseFor: 1200,
            }}
          />
        </h2>

        <div className="button-for-home">
          <a
            target="_"
            href="https://www.upwork.com/freelancers/~016798daf5554ca4e6"
            className="hire-me-btn"
          >
            Hire Me
          </a>

          <div className="get-resume-btn">
            <a href={my_cv} download="Abrham_Mengistu_CV.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
