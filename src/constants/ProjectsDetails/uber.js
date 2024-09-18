import { uber } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "uber",
    name: "Uber",
    overview: "Ride booking application, designed to handle user requests for ride services efficiently. The system leverages MongoDB for data storage and RedisGeo for managing location-based queries. This setup allows for scalable and responsive ride booking operations, ensuring that users can quickly find and book rides based on their geographic location.",
    description:
        "Ride booking application, designed to handle user requests for ride services efficiently. The system leverages MongoDB for data storage and RedisGeo for managing location-based queries. This setup allows for scalable and responsive ride booking operations, ensuring that users can quickly find and book rides based on their geographic location.",
    features: {
        "Core Features": [
            "Secure login and registration for users.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
        ],
    },
    tags: [
        techTags.node,
        techTags.mongodb,
        techTags.redis,
    ],
    image: uber,
    source: {
        "github": { name: "Github", link: "https://github.com/GauravGhost/uber" },
    },
}