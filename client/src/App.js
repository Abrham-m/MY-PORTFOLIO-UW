import React from "react";
import "././App.css";

import { Sidebar } from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonial/Testimonial";

import ScrollToTop from "react-scroll-to-top";
const App = () => {
  return (
    <>
      <Sidebar />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Testimonial />
      <Contact />
      <ScrollToTop
        smooth={true}
        color="white"
        style={{ borderRadius: "90px", backgroundColor: "black" }}
      />
    </>
  );
};

export default App;
