import { jobit } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "access-control-system",
    name: "Access Control System",
    overview: "Our team developed an advanced Access Control System using Electron and React technologies. This system integrates IP and serial devices to enable real-time monitoring and control, enhancing facility security and operational efficiency.",
    description:
        "Our team developed an advanced Access Control System using Electron and React technologies. This system integrates IP and serial devices to enable real-time monitoring and control, enhancing facility security and operational efficiency. The backend infrastructure, powered by Node.js (Express.js) and SQL databases, was optimized to ensure high performance and scalability. A robust role-based access control (RBAC) system was implemented, incorporating encrypted communication protocols to meet GDPR compliance standards and mitigate unauthorized access risks. We also incorporated a user-friendly interface for seamless navigation and management. Additionally, the system supports integration with third-party security solutions for enhanced versatility and adaptability. Regular updates and maintenance cycles ensure the system remains secure and up-to-date with the latest technology standards.",
    features: {
        "Core Features": [
            "Secure login and registration for users.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
        ],
    },
    tags: [
        techTags.react,
        techTags.node,
        techTags.sql,
    ],
    image: jobit,
    github: "",
    live: "",
}