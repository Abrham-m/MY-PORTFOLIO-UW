import React, { useState } from "react";
import "./NavbarMobileView.css";
import { FcHome, FcPortraitMode, FcTodoList } from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
// import { TbMessage2Star } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileView = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={30} onClick={handleClick} />
        </p>
      </div>

      {navBarOpen ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            {/* <li className="nav-item-mobileview">
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
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
