import { qshort } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "qshort",
    name: "Qshort (url Shortner)",
    overview: "Our team developed an advanced Access Control System using Electron and React technologies.",
    description:
        "Our team developed an advanced Access Control System using Electron and React technologies.",
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
    image: qshort,
    source: {
        "github": { name: "Github", link: "https://github.com/GauravGhost/QShort" },
        "live": { name: "Github", link: "https://qshort.zesp.in/" },
    },
}