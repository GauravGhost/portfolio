import { portfolio } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "portfolio",
    name: "Portfolio",
    overview: "This portfolio features a sophisticated full stack web application developed using a modern tech stack. The frontend leverages React for a dynamic, interactive user interface, enhanced with Tailwind CSS for responsive design and Framer Motion for smooth animations.",
    description:
        "This portfolio features a sophisticated full stack web application developed using a modern tech stack. The frontend leverages React for a dynamic, interactive user interface, enhanced with Tailwind CSS for responsive design and Framer Motion for smooth animations.",
    features: {
        "Core Features": [
            "Secure login and registration for users.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
        ],
    },
    tags: [
        techTags.react,
        techTags.javascript,
        techTags.tailwind
    ],
    image: portfolio,
    github: "https://github.com/GauravGhost/portfolio",
    live: "https://portfolio.zesp.in/",
}