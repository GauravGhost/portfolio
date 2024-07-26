import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  sql,
  aws,
  express,
  java,
  springboot,
  wiseneosco
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Springboot Developer",
    icon: creator,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
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
    name: "aws",
    icon: aws,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
];


const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Wise Neosco India Pvt. Ltd.",
    icon: wiseneosco,
    iconBg: "#111",
    date: "December 2023 - Present",
    points: [
      "Optimized responsive web applications with React.js, reducing load times by 20%.",
      "Migrated the existing project from nodejs to springboot, improving the overall software performance by 40%.",
      "Developed backend by following industry standard, reducing costs by 25% using springboot.",
      "Improved API response times by 20% and overall system performance through Node.js and Express.js.",
      "Designed and developed backend services using nodejs and springboot for various projects.",
      "Implemented user-friendly interfaces and improved user experiences",
      "Managed source code using Git and GitHub, maintaining code integrity and facilitating seamless collaboration.",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Library Management System",
    description:
      "We developed a Smart Library Management System using the MERN stack and React Native for mobile apps. The mobile application includes an NFC feature for easy book check-outs/returns. Our desktop app, built with Electron.js, integrates with serial port devices, QR code scanners, RFID readers, and printers, streamlining library operations. Key features include a React admin panel for efficient resource management, a kiosk app for seamless integration with IT devices, and real-time monitoring via IP and serial devices. This system enhances user experience and operational efficiency, leading to a 25% improvement in user satisfaction, a 30% reduction in access-related incidents, and a 15% reduction in operational costs. Our Smart Library Management System is a state-of-the-art solution that automates and optimizes library functions, providing a smart, efficient, and user-friendly environment.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gauravghost",
  },
  {
    name: "Access Control System",
    description:
      "Our team developed an advanced Access Control System using Electron and React technologies. This system integrates IP and serial devices to enable real-time monitoring and control, enhancing facility security and operational efficiency. The backend infrastructure, powered by Node.js (Express.js) and SQL databases, was optimized to ensure high performance and scalability. A robust role-based access control (RBAC) system was implemented, incorporating encrypted communication protocols to meet GDPR compliance standards and mitigate unauthorized access risks. We also incorporated a user-friendly interface for seamless navigation and management. Additionally, the system supports integration with third-party security solutions for enhanced versatility and adaptability. Regular updates and maintenance cycles ensure the system remains secure and up-to-date with the latest technology standards.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "electron.js",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gauravghost",
  },
];

export { services, technologies, experiences, testimonials, projects };
