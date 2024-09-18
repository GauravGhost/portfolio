import { carrent } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "smart-library-management",
    name: "Smart Library Management",
    overview: "Developed a robust backend for the Smart Library Management System, utilizing cutting-edge technologies to optimize library operations and ensure seamless integration across various platforms.",
    description:
        `
        The backend of the Smart Library Management System is built on a scalable and secure architecture, integrating multiple databases, including Oracle, MySQL, MSSQL, and MongoDB, to support diverse data needs and ensure high availability. The system features seamless API integrations with smart devices like smart bulbs and smart gate systems, enabling automated library operations. It is designed to work harmoniously across web, mobile, and kiosk platforms, providing a cohesive user experience.
        The backend architecture places a strong emphasis on security and policy enforcement, ensuring compliance with access controls and operational protocols. Real-time monitoring is enabled through a logging system, offering critical insights into system performance and potential issues. Database interactions are efficiently managed via DataSource-based services, which ensure scalability and consistency across various services. With a custom exception handler, the system ensures robust error management, improving overall reliability and reducing system downtime. This backend solution enhances operational efficiency, reduces costs, and improves user satisfaction by automating and streamlining key library functions.
        `,
    features: {
        "Core Features": [
            "Integrated multiple databases, including Oracle, MySQL, MSSQL, and MongoDB, to ensure flexibility and robust data management.",
            "Implemented API integrations with smart devices such as smart bulbs and smart gate systems, enhancing automation and connectivity.",
            "Engineered a backend architecture capable of supporting web, mobile applications, and kiosk systems, with a strong emphasis on security and adherence to strict policies.",
            "Designed and implemented a logging system for real-time monitoring, providing visibility into application performance and potential issues.",
            "Utilized DataSource for database interactions across various services, ensuring consistent, efficient, and scalable data handling.",
            "Applied separation of concerns principles, delivering modular services that provide distinct functionalities, promoting maintainability and clarity in the application architecture.",
            "Developed a custom exception handler, ensuring robust and comprehensive error management, leading to higher system reliability.",
        ],
    },
    tags: [
        techTags.react,
        techTags.node,
        techTags.mssql,
        techTags.springboot,
        techTags.mongodb
    ],
    image: carrent,
    source: {
    },
}