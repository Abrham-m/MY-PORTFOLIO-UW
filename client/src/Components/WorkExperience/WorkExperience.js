import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineNetworkCheck } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyName: "Bahir Dar University",
      position: "Internship Networking and Maintenance",
      description:
        "I worked at Bahir Dar University as intern on Networking and Maintenance.We have installed network for several buildings",
      workTime: "Jun 01, 2022 - Sep 01,2022",
      techUsed: [
        {
          techName: "Networking",
        },
        {
          techName: "Packet Tracer",
        },
      ],
    },
  ];
  const colors = ["#fca311", "#219ebc", "#588157", "#9e2a2b"];
  return (
    <div className="container container-w-e" id="workExperience">
      <div className="section-title" id="w-e-t">
        <h5>Work Experience</h5>
        <span className="line line-w-e"></span>
      </div>
      <div className="timeline-section-w-e">
        <VerticalTimeline lineColor={"#ffc300"}>
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
              date={item.workTime}
              dateClassName={"date"}
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdOutlineNetworkCheck />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyName}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item["techUsed"].map((techItem, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-used-in-work">
                      <p>{techItem["techName"]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;
