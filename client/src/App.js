import React from 'react'
import "././App.css";

import { Sidebar } from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
const App = () => {
  return (
    <>
    <Sidebar/>
    <About/>
    <TechStack/>
    <Project/>
    </>
  )
}

export default App