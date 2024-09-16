import { zespcode, zespcode1 } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "zespcode",
    name: "Zespcode (Leetcode Clone)",
    overview: "Leetcode like backend based on Microservice to ensure modularity and scalability. It supports three languages for problem statement.",
    description:
        "Leetcode like backend based on Microservice to ensure modularity and scalability. It supports three languages for problem statement.",
    features: {
        "Core Features": [
            "Uses Redis queues for managing submission payloads and evaluation results.",
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
            "Performs MongoDB queries to retrieve and store problem and submission details.",
            "Processes code submissions and evaluates them using the Evaluator Service.",
            "Notifies clients of submission status updates in real-time through the Web Socket Service.",
        ],
        "Zespcode Problem Service": [],
        "Zespcode Evaluator Service": [],
        "Zespcode Submission Service": [],
        "Zespcode Socket Service": []
    },
    tags: [
        techTags.docker,
        techTags.fastify,
        techTags.node,
        techTags.typescript,
        techTags.mongodb,
        techTags.redisQueue
    ],
    images: [
        zespcode1,
        zespcode
    ],
    image: zespcode,
    github: "https://github.com/GauravGhost/zespcode",
    live: "",
}