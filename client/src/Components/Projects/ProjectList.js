import React from "react";
import { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const ProjectList = ({
  name,
  description,
  projectLink,
  repoLink,
  techUsed,
}) => {
  // showProjectDescription is true it is expanded and description is showed
  const [showProjectDescription, setShowProjectDescription] = useState(false);
  const clickHandler = () => {
    setShowProjectDescription((previous) => !previous);
  };
  return (
    <div
      className={
        showProjectDescription
          ? "project-description-opened project-list"
          : "project-list"
      }
      onClick={clickHandler}
      onMouseEnter={() => setShowProjectDescription(true)}
      // onMouseLeave={()=> setShowProjectDescription(false)}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>
          {showProjectDescription ? (
            <FcCollapse size={20} />
          ) : (
            <FcExpand size={20} />
          )}
        </p>
      </div>
      <div className="project-description">
        <p>
          {showProjectDescription
            ? description
            : `${description.substring(0, 72)}... `}
        </p>
      </div>
      <div className="row row-projectList">
        {techUsed &&
          techUsed.map((tech, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p> {tech["techName"]}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="live-and-repo-container">
        <div className="live-demo-button">
          <a target="_" href={projectLink}>
            <span className="live-demo-icon">
              <MdLiveTv size={25} color="#ffaa30" id="live-demo-icon-self" />
            </span>
            Live Demo
          </a>
        </div>
        <div className="live-demo-button">
          <a target="_" href={repoLink}>
            <span className="live-demo-icon">
              <FaGithub size={25} color="#3a86ff" id="live-demo-icon-self" />
            </span>
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
