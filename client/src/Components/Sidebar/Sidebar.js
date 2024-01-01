import React, { useState } from "react";
import "./Sidebar.css";
import SidebarList from "./SidebarList";
import Home from "../Home/Home";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      {/** this div hs dynamic className which is going to change based on the state value of expandSidebar */}
      <div className={expandSidebar ? "sidebar_expand sidebar" : "sidebar"}>
        <div className="sidebar_expand_icon">
          {/** this p tag contains the icons that is going to change based on the state value of expandSidebar  */}
          <p onClick={handleExpandClick}>
            {expandSidebar ? (
              <BsChevronCompactLeft size={30} />
            ) : (
              <BsChevronCompactRight size={30} />
            )}
          </p>
        </div>
        {/* SidebarList has props called expandSidebar which contains the value of expandSidebar */}
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Sidebar;
