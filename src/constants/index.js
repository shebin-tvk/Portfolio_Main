import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  twofit,
  ASH_LMS,
  merciaChatBot,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Finepher",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2025 - august 2025",
    points: [
      "Developed and maintained web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built and integrated RESTful APIs and implemented backend functionality using Node.js and Express.js.",
      "Worked with TypeScript and modern development practices to create scalable and maintainable applications.",
      "Collaborated with team members to develop features, fix bugs, and improve overall application performance.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Ash Corp Technology",
    icon: tesla,
    iconBg: "#383E56",
    date: "November 2025 - July 2026",
    points: [
      "Developing and maintaining scalable web applications using the MERN stack, TypeScript, and modern web technologies.",
      "Building and integrating RESTful APIs with Node.js, Express.js, and MongoDB for reliable backend functionality.",
      "Developing features for the ASH LMS platform, including course management, chapters, student enrollment, progress tracking, and reviews.",
      "Collaborating with team members to implement responsive, user-friendly interfaces and deliver high-quality software solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TwoFit",
    description:
      "A comprehensive fitness management platform with role-based access for founders, heads, admins, coaches, and clients. Includes coach management, payroll, incentives, SOPs, reminders, and real-time communication features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
    ],
    image: twofit,
    source_code_link: "https://app.twofit.in/login",
  },

  {
    name: "ASH LMS",
    description:
      "A learning management system designed for online education, featuring course management, chapters, student enrollment, video lessons, course progress tracking, ratings, reviews, and secure role-based functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: ASH_LMS,
    source_code_link: "https://ashacademylms.com/courses",
  },

  {
    name: "Mercia Chatbot",
    description:
      "An AI-powered chatbot developed for a grocery application to provide users with an interactive conversational experience, using Google Gemini to generate intelligent and context-aware responses.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
    ],
    image: merciaChatBot,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
