import { highriseSdk } from "../../assets"
import { techTags } from "../techTags"

export default {
    id: "highrise-sdk",
    name: "Highrise SDK",
    overview: "A lightweight library for seamless interaction with Highrise servers to connect your bot to the highrise virtual world game with just simple code.",
    description:
        "A lightweight library for seamless interaction with Highrise servers to connect your bot to the highrise virtual world game with just simple code.  Simple setup and connection using the provided HR class and event listeners.",
    features: {
        "Core Features": [
            "Utilizes events like Ready, Chat, PlayerJoined, and more for responsive bot behavior.",
            "Provides a robust set of tools and functions to create and manage bots within the Highrise environment.",
            "Includes functions for sending messages, whispers, emotes, and reactions.",
            "Allows retrieval and management of users in rooms, including moving users between rooms.",
            "Supports actions like sitting, walking, and teleporting within rooms.",
            "Manages the bot's wallet, gold balance, boost tokens, and facilitates transactions like tipping users and purchasing items.",
            "Enables moderation actions and management of user privileges within rooms.",
            "Provides access to user backpacks, outfits, and the bot's inventory.",
            "Handles conversation history, sending messages, and managing conversations."
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