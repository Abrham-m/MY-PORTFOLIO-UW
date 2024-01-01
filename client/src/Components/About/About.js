import React from "react";
import "./About.css";
import profilePic from "../../Image/profilePic.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
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
                Hello, my name is Abrham Mengistu. I am a passionate and skilled
                Node.js developer with more than 2 years of experience in the
                field. I have a strong knack for creating efficient and scalable
                web applications using cutting-edge technologies and frameworks.
                In addition to being well-versed in Node.js. I thrive in
                collaborative team environments, fostering open communication
                and utilizing agile methodologies to deliver high-quality code
                within deadlines.
              </p>
              <p>
                I specialize in building strong backend architectures, designing
                and implementing RESTful APIs, and optimizing performance for a
                great user experience. I am proactive in learning and staying
                updated with industry trends and practices, and I possess
                excellent problem-solving skills. I enjoy taking on new
                challenges and am a strong advocate for continuous learning and
                sharing knowledge within the developer community.
              </p>
            </div>

            <div className="social-media-account">
              <a
                target="_"
                href="https://www.linkedin.com/in/abrham-mengistu-a45046208/"
              >
                <FaLinkedin size={32} color="#0077b5" />
              </a>
              <a target="_" href="https://twitter.com/Abrham_m1">
                <FaXTwitter size={32} />
              </a>
              <a target="_" href="https://github.com/Abrham-m">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
