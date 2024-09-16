import { carrent } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "smart-library-management",
    name: "Smart Library Management",
    overview: "We developed a Smart Library Management System using the MERN stack and React Native for mobile apps. ",
    description:
        "We developed a Smart Library Management System using the MERN stack and React Native for mobile apps. The mobile application includes an NFC feature for easy book check-outs/returns. Our desktop app, built with Electron.js, integrates with serial port devices, QR code scanners, RFID readers, and printers, streamlining library operations. Key features include a React admin panel for efficient resource management, a kiosk app for seamless integration with IT devices, and real-time monitoring via IP and serial devices. This system enhances user experience and operational efficiency, leading to a 25% improvement in user satisfaction, a 30% reduction in access-related incidents, and a 15% reduction in operational costs. Our Smart Library Management System is a state-of-the-art solution that automates and optimizes library functions, providing a smart, efficient, and user-friendly environment.",
    features: {
        "Core Features": [
            "Secure login and registration for users.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
        ],
    },
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
}