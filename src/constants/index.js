import {
  javascript,
  typescript,
  html,
  css,
  python,
  cpp,
  r,
  java,
  github,
  github_dark,
  aws,
  ocaml,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  coming_soon,
  habittracker,
  RAG_chatbot,
  WiDS_datathon,
  lecture_notes_converter,
  meimage,
  threejs,
  dxc,
  btt,
} from "../assets";

import { SiPython, SiReact, SiPytorch, SiScikitlearn, 
         SiPandas, SiNumpy, SiFastapi, SiPostgresql, SiKaggle } from "react-icons/si";

import { FaFilePdf, FaRobot, FaFileAlt } from "react-icons/fa";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "OCaml",
    icon: ocaml,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github_dark,
  },
  {
    name: "AWS (S3, CloudWatch, RDS, ECS, ECR, Lambda, EventBridge)",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "June 2026 - August 2026",
    points: [
      "AWS Deadline Cloud",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "AWS Deadline Cloud",
    ],
  },
  {
    title: "Break Through Tech AI Fellow",
    company_name: "Break Through Tech",
    icon: btt,
    iconBg: "#E6DEDD",
    date: "May 2024 - May 2025",
    points: [
      "Selected from 3000+ applicants for the Break Through Tech Al program.",
      "Developed foundational skills in Machine Learning (ML) and Artificial Intelligence (Al) using industry-relevant tools through, earning an online certification from Cornell University.",
      "Worked in teams to build industry-related Al projects in collaboration with industry advisors throughout.",
      "Cultivated leadership skills to responsibly use ML and Al for social good.",
    ],
  },
    {
    title: "AI Studio Fellow",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#E6DEDD",
    date: "August 2024 - December 2024",
    points: [
      "Developed a RAG-based chatbot using Cohere AI to provide accurate responses on EU AI Act compliance.",
      "Integrated PDF data extraction, exploratory analysis, and retrieval-augmented generation techniques for effective information retrieval.",
      "This opportunity was gained through the Break Through Tech ML/AI program.",
      "Skills: NLP, LLM, RAG, Data Cleaning, Data Extraction, and Teamwork.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "AWS Deadline Cloud",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    id: 1,
    title: "HabitTracker",
    des: "Full-stack habit tracker with social and calendar features",
    img: habittracker,
    iconLists: [SiPython, SiFastapi, SiPostgresql],
    link: "https://github.com/gianelli-lagos/HabitTracker",
  },
  {
    id: 2,
    title: "RAG Chatbot",
    des: "Document-based chatbot built for the DXC ML Challenge",
    img: RAG_chatbot,
    iconLists: [SiPython, FaFilePdf, FaRobot],
    link: "https://github.com/msmayaswan/DXC-Technology-1B",
  },
  {
    id: 3,
    title: "WiDS Datathon 2025",
    des: "Machine learning model for ADHD & Sex prediction from brain data",
    img: WiDS_datathon,
    iconLists: [SiPython, SiScikitlearn, SiKaggle],
    link: "https://github.com/aishaahmadd/WiDS_Datathon",
  },
  {
    id: 4,
    title: "lecture-notes-converter",
    des: "Converts lecture slides into note-taking templates",
    img: lecture_notes_converter,
    iconLists: [SiPython, FaFilePdf, FaFileAlt],
    link: "https://github.com/gianelli-lagos/lecture-notes-converter",
  }
];


export {technologies, experiences, testimonials, projects };