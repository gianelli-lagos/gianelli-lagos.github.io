import {
  javascript,
  typescript,
  html,
  css,
  python,
  cpp,
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
  meimage,
  threejs,
  dxc,
  btt,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "OCaml",
    icon: ocaml,
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
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github_dark,
  },
  {
    name: "AWS (S3, CloudWatch)",
    icon: aws,
  },
];

const experiences = [
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
    title: "Break Through Tech Fellow",
    company_name: "Break Through Tech",
    icon: btt,
    iconBg: "#E6DEDD",
    date: "May 2024 - May 2025",
    points: [
      "Selected from 3000+ applicants for the Break Through Tech Al program.",
      "Developed foundational skills in Machine Learning (ML) and Artificial Intelligence (Al) using industry-relevant tools through, earning an online certification from Cornell University.",
      "Worked in teams to build industry-related Al projects in collaboration with industry advisors throughout.",
      "Cultivated leadership skills to responsibly use ML and Al tor social good.",
    ],
  },
    {
    title: "BTT AI Studio",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#E6DEDD",
    date: "August 2024 - December 2024",
    points: [
      "Built RAG Chatbot for EU AI Act.",
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
    title: "TBD",
    des: "...",
    img: coming_soon,
    iconLists: [coming_soon],
    link: "https://github.com/gianelli-lagos",
  },
  {
    id: 2,
    title: "TBD",
    des: "...",
    img: coming_soon,
    iconLists: [coming_soon],
    link: "https://github.com/gianelli-lagos",
  },
  {
    id: 3,
    title: "TBD",
    des: "...",
    img: coming_soon,
    iconLists: [coming_soon],
    link: "https://github.com/gianelli-lagos",
  },
  {
    id: 4,
    title: "TBD",
    des: "...",
    img: coming_soon,
    iconLists: [coming_soon],
    link: "https://github.com/gianelli-lagos",
  }
];


export {technologies, experiences, testimonials, projects };