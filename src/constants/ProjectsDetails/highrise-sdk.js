import { highriseSdk } from "../../assets"
import { techTags } from "../techTags"

export default {
    id: "highrise-sdk",
    name: "Highrise SDK",
    overview: "A lightweight library for seamless interaction with Highrise servers to connect your bot to the highrise virtual world game with just simple code.",
    description:
        "A lightweight library for seamless interaction with Highrise servers to connect your bot to the highrise virtual world game with just simple code.",
    features: {
        "Core Features": [
            "Secure login and registration for users.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
        ],
    },
    tags: [
        techTags.node,
        techTags.rabbitMQ,
        techTags.microservices,
        techTags.mysql
    ],
    image: highriseSdk,
    github: "https://github.com/GauravGhost/hr-sdk",
    live: "https://www.npmjs.com/package/hr-sdk",
}