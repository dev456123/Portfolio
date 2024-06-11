"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
               visible={true}
              contentStyle={{
                background: "#F9F6EE",
                boxShadow: "none",
                border: "1px solid #555",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #888",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#16161D",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-black">{item.title}</h3>
              <p className="font-normal !mt-0 text-black">{item.location}</p>
              <p className="!mt-1 !font-normal text-black">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
