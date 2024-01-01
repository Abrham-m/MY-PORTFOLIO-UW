import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";
import Zoom from "react-reveal/Zoom";
const Project = () => {
  const data = [
    {
      name: "Ethiopian Market Place ",
      description:
        "Ethiopian Marketplace is one of digital market platforms where merchants and buyer meet digitally and make the payment online .",
      projectLink: "https://ethiomp.vercel.app/",
      repoLink: "https://github.com/Ethiopian-Market-Place/EMP.git",
      techUsed: [
        {
          techName: "Next Js",
        },
        {
          techName: "React Js",
        },
        {
          techName: "Express Js",
        },
        {
          techName: "Tailwind",
        },
      ],
    },
  ];
  return (
    <div className="container container-project" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <Zoom right>
              <ProjectList {...item} />
            </Zoom>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
