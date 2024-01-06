import React from "react";
import "././App.css";

import { Sidebar } from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
// import Testimonial from "./Components/Testimonial/Testimonial";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
    <NavbarMobileView/>
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      {/* <Testimonial /> */}
      <ScrollToTop
        smooth={true}
        color="white"
        style={{ borderRadius: "90px", backgroundColor: "black" }}
      />
    </>
  );
};

export default App;
