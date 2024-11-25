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
            "Each service is designed to handle specific tasks, ensuring modularity and scalability.",
            "All services connect to a database to store and retrieve data.",
            "Standardized error handling across services.",

        ],
        "Zespcode Problem Service": [
            "Fetching and storing the static problem data with stubs in different languages.",
            "Provides API routes for various endpoints.",
            "Custom middleware for handling errors.",
        ],
        "Zespcode Evaluator Service": [
            "Uses Express and typescript for server setup.",
            "Provides a UI for monitoring Bull queues.",
            "Custom logger configuration for detailed logging.",
            "Organized API routes for handling requests.",
            "Starts a submission worker to process tasks from the submission queue.",
        ],
        "Zespcode Submission Service": [
            "Uses Fastify and javascript for server setup.",
            "Starts an evaluation worker to process tasks from the evaluation queue.",
            "SubmissionService class for handling submission-related operations.",
            "Custom error handling within service methods.",
        ],
        "Zespcode Socket Service": [
            "Uses Express for server setup.",
            "Real-time communication using Socket.io.",
            "Uses Redis for caching and storing user connection IDs.",
            "Creates an HTTP server for handling requests.",
            "Manages socket events for setting and retrieving user connection IDs.",
            "Endpoint for sending payloads to connected users.",
        ]
    },
    tags: [
        techTags.javascript,
        techTags.typescript,
        techTags.node,
        techTags.express,
        techTags.fastify,
        techTags.mongodb,
        techTags.redisQueue,
        techTags.docker,
    ],
    images: [
        zespcode1,
        zespcode
    ],
    image: zespcode,
    source: {
        "github": {name: "Github", link:"https://github.com/GauravGhost/zespcode"},
        "live": { name: "Live Demo", link: "https://zespcode.zesp.in/" },
    },
}