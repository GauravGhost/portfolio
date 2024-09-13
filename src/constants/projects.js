import { carrent, jobit } from "../assets";
import { techTags } from "./techTags";

export const projects = [
    {
        name: "Smart Library Management",
        description:
            "We developed a Smart Library Management System using the MERN stack and React Native for mobile apps. The mobile application includes an NFC feature for easy book check-outs/returns. Our desktop app, built with Electron.js, integrates with serial port devices, QR code scanners, RFID readers, and printers, streamlining library operations. Key features include a React admin panel for efficient resource management, a kiosk app for seamless integration with IT devices, and real-time monitoring via IP and serial devices. This system enhances user experience and operational efficiency, leading to a 25% improvement in user satisfaction, a 30% reduction in access-related incidents, and a 15% reduction in operational costs. Our Smart Library Management System is a state-of-the-art solution that automates and optimizes library functions, providing a smart, efficient, and user-friendly environment.",
        tags: [
            techTags.react,
            techTags.reactNative,
            techTags.node,
            techTags.sql,
            techTags.springboot,
        ],
        image: carrent,
        github: "",
        live: "",
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
        github: "",
        live: "",
    },
];