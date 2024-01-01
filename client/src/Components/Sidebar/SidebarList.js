import React from "react";
import "./SidebarList.css";
import profilePic from "../../Image/profilePic.jpg";
import { FcHome, FcPortraitMode, FcTodoList } from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { TbMessage2Star } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilePic} alt="" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcHome size={25} />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcPortraitMode size={25} />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="workExperience"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FaBriefcase size={25} color="#0077b6" />
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <MdBiotech size={25} color="orange" />
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FaGraduationCap size={25} color="#135f69" />
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FcTodoList size={25} />
                Projects
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <TbMessage2Star size={25} color="#e396f2" />
                Testimonial
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                duration={500}
                smooth={true}
                offset={-80}
              >
                <RiContactsBook2Fill size={25} color="#ff9e00" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-icon-only">
          <ul>
            <li className="nav-item ">
              {/* Icon for Home */}
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {/* Icon for About */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <FcPortraitMode size={25} />
              </Link>
            </li>
            <li className="nav-item">
              {/* Icon for Work Experience */}
              <Link
                to="workExperience"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FaBriefcase size={25} color="#0077b6" />
              </Link>
            </li>
            <li className="nav-item">
              {/* Icon for Teck Stack */}
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <MdBiotech size={25} color="orange" />
              </Link>
            </li>
            <li className="nav-item">
              {/* Icon for Education */}
              <Link
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FaGraduationCap size={25} color="#135f69" />
              </Link>
            </li>
            <li className="nav-item">
              {/* Icon for Projects */}
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                offset={-30}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            {/* <li className="nav-item">
               Icon for Testionial 
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                <TbMessage2Star size={25} color="#e396f2" />
              </Link>
            </li> */}
            <li className="nav-item">
              {/* Icon for Contact */}
              <Link
                to="contact"
                spy={true}
                duration={500}
                smooth={true}
                offset={-80}
              >
                <RiContactsBook2Fill size={25} color="#ff9e00" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
