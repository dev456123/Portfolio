import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sortImg from "@/public/sort.png";
import portImg from "@/public/port.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python Developer Intern ,Slash Mark IT",
    location: "Remote",
    description:
      "I worked as a python developer intern for 6 months. where we developed a computer vision application using Django, Python, and OpenCV to perform image processing tasks.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec '23 - Apr '24",
  },
  {
    title: "Full Stack Intern ,Solar Secure Solutions",
    location: "Bengaluru, KA",
    description:
      "I worked as a full stack developer intern for 2 months and successfully improved the comprehensibility development of dynamic ordering systems.",
    icon: React.createElement(CgWorkAlt),
    date: "May '23 - Jul '23",
  },
] as const;

export const projectsData = [
  {
    title: "Dynamic Profile Builder",
    description:
      "Dynamic Profile Builder autonomously generates personalized web pages for faculty.",
    tags: ["Php", "Mysql", "CMS"],
    imageUrl: portImg,
 
  },
  {
    title: "Sorting Visualizer",
    description:
      "A sorting visualizer is a web app that shows how different sorting algorithms work by animating the process. It can help users understand the algorithms better than long codes.",
    tags: ["Html","Css","Javascript"],
    imageUrl: sortImg,
   
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;