import { airplane, highriseSdk, portfolio, qshort, uber, zespcode } from "../assets";
import { techTags } from "./techTags";

export const personalProjects = [
    {
        id: "zespcode",
        name: "Zespcode (Leetcode Clone)",
        overview: "",
        description:
            "Leetcode like backend based on Microservice to ensure modularity and scalability. It supports three languages for problem statement.",
        tags: [
            techTags.docker,
            techTags.fastify,
            techTags.node,
            techTags.typescript,
            techTags.mongodb,
            techTags.redisQueue
        ],
        image: zespcode,
        github: "https://github.com/GauravGhost/zespcode",
        live: "",
    },
    {
        id: "uber",
        name: "Uber",
        overview: "",
        description:
            "Ride booking application, designed to handle user requests for ride services efficiently. The system leverages MongoDB for data storage and RedisGeo for managing location-based queries. This setup allows for scalable and responsive ride booking operations, ensuring that users can quickly find and book rides based on their geographic location.",
        tags: [
            techTags.node,
            techTags.mongodb,
            techTags.redis,
        ],
        image: uber,
        github: "https://github.com/GauravGhost/uber",
        live: "",
    },
    {
        id: "qkart",
        name: "Qkart",
        overview: "",
        description:
            "QKart is an E-commerce application offering a variety of products for customers to choose from. Implemented the core logic for authentication, shopping cart, and checkout with responsive design elements for the uniform experience across different devices.",
        tags: [
            techTags.node,
            techTags.react,
            techTags.mongodb,
            techTags.javascript
        ],
        image: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/e6fb82a2-423d-4f62-9962-f19f2f81fa8c.png",
        github: "https://github.com/GauravGhost/QKart-Backend",
        live: "https://qkartmity.netlify.app/",
    },
    {
        id: "portfolio",
        name: "Portfolio",
        overview: "",
        description:
            "This portfolio features a sophisticated full stack web application developed using a modern tech stack. The frontend leverages React for a dynamic, interactive user interface, enhanced with Tailwind CSS for responsive design and Framer Motion for smooth animations.",
        tags: [
            techTags.react,
            techTags.javascript,
            techTags.tailwind
        ],
        image: portfolio,
        github: "https://github.com/GauravGhost/portfolio",
        live: "https://portfolio.zesp.in/",
    },
    {
        id: "airline-management-system",
        name: "Airline Management System",
        overview: "",
        description:
            "It is based on a microservice architecture, comprising four distinct microservices that collectively provide a comprehensive flight management system.",
        tags: [
            techTags.node,
            techTags.rabbitMQ,
            techTags.microservices,
            techTags.mysql
        ],
        image: airplane,
        github: "https://github.com/GauravGhost/Flight-Service",
        live: "",
    },
    {
        id: "qshort",
        name: "Qshort (url Shortner)",
        overview: "",
        description:
            "Our team developed an advanced Access Control System using Electron and React technologies.",
        tags: [
            techTags.node,
            techTags.rabbitMQ,
            techTags.microservices,
            techTags.mysql
        ],
        image: qshort,
        github: "https://github.com/GauravGhost/QShort",
        live: "https://qshortx.netlify.app/",
    },
    {
        id: "highrise-sdk",
        name: "Highrise SDK",
        overview: "",
        description:
            "A lightweight library for seamless interaction with Highrise servers to connect your bot to the highrise virtual world game with just simple code.",
        tags: [
            techTags.node,
            techTags.rabbitMQ,
            techTags.microservices,
            techTags.mysql
        ],
        image: highriseSdk,
        github: "https://github.com/GauravGhost/hr-sdk",
        live: "https://www.npmjs.com/package/hr-sdk",
    },
];