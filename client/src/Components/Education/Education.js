import React from "react";
import "./Education.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

const Education = () => {
  const data = [
    {
      name: "Bahir Dar University",
      degree: "B.sc in Computer Engineering ",
      year: "2018-2023",
      // des: can be added but left it for now
    },
    {
      name: "IBM",
      degree: "Developing Back-End Apps with Node.js and Express",
      year: "Nov 12, 2021 - Jan 3, 2022",
      // des: can be added but left it for now
    },
    {
      name: "CISCO",
      degree: "CCNAv7: Introduction to Networks",
      year: "Mar 26, 2021 - Jul 26, 2021",
      // des: can be added but left it for now
    },
    {
      name: "CISCO",
      degree: "CCNAv7: Switching, Routing, and Wireless Essentials",
      year: "Jan 7, 2023 - May 7, 2023",
      // des: can be added but left it for now
    },
    {
      name: "CISCO",
      degree: "CCNAv7: Enterprise Networking, Security, and Automation",
      year: "Aug 26, 2023 - Dec 26, 2023",
      // des: can be added but left it for now
    },
  ];
  const colors = ["#d6a960ff", "#1f1d36", "#70b3a0ff", "#7209b7", "#a1c181"];
  return (
    <div className="container container-education" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line line-ed"></span>
      </div>
      <div className="timeline-section-w-e">
        <VerticalTimeline lineColor={"#ffc300"}>
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
              date={item.year}
              dateClassName={"date"}
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={index === 0 ? <FaGraduationCap /> : <GrCertificate />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {item.degree}
              </h5>

              {/* <p>{item.description}</p> */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
