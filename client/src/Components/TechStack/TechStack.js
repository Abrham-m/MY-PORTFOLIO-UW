import React from "react";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import "./TechStack.css";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

const TechStack = () => {
  const data = [
    {
      name: "Javascript",
    },
    {
      name: "Node Js",
    },
    {
      name: "Express JS",
    },
    {
      name: "Mongo DB",
    },
    {
      name: "MySQL",
    },
    {
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "C++",
    },
  ];

  const [ShowMoreTechStack, setShowMoreTechStack] = useState(9);

  const LoadMore = () => {
    //we are setting the value to be added is 3
    setShowMoreTechStack((previous) => previous + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row row-techstack">
        {data.slice(0, ShowMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 " key={index}>
            <Fade right>
              <div className="tech-content ">
                <span className="tech-icon">
                  {index === 0 ? <IoLogoJavascript size={40} /> : ""}
                  {/* {index === 1 ? <FaReact size={40} /> : ""} */}
                  {index === 1 ? <FaNodeJs size={40} /> : ""}
                  {index === 2 ? <SiExpress size={40} /> : ""}
                  {index === 3 ? <SiMongodb size={40} /> : ""}
                  {index === 4 ? <GrMysql size={40} /> : ""}
                  {index === 5 ? <FaPython size={40} /> : ""}
                  {index === 6 ? <FaJava size={40} /> : ""}
                  {index === 7 ? <FaHtml5 size={40} /> : ""}
                  {index === 8 ? <DiCss3 size={40} /> : ""}
                  {index === 9 ? <BiLogoCPlusPlus size={40} /> : ""}
                </span>
                <p>{item.name}</p>
              </div>
            </Fade>
          </div>
        ))}
      </div>
      {ShowMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={LoadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;
