import { techTags } from "../techTags";

export default {
    id: "qkart",
    name: "Qkart",
    overview: "QKart is an E-commerce application offering a variety of products for customers to choose from. Implemented the core logic for authentication, shopping cart, and checkout with responsive design elements for the uniform experience across different devices.",
    description:
        "QKart is an E-commerce application offering a variety of products for customers to choose from. Implemented the core logic for authentication, shopping cart, and checkout with responsive design elements for the uniform experience across different devices.",
    features: {
        "Core Features": [
            "Access to a variety of coding problems categorized by difficulty and topic.",
            "Users can submit solutions, which are evaluated and tested against predefined test cases.",
            "Core logic for authentication, shopping cart, and checkout.",
            "Responsive design elements for a uniform experience across different devices.",
        ],
        "Challenges and Solutions": [
            "Challenge: Ensuring a uniform experience across different devices.",
            "Solution: Implementing responsive design elements using Tailwind CSS and Framer Motion for smooth animations."
        ]
    },
    tags: [
        techTags.node,
        techTags.react,
        techTags.mongodb,
        techTags.javascript
    ],
    image: "https://crio-directus-assets.s3.ap-south-1.amazonaws.com/e6fb82a2-423d-4f62-9962-f19f2f81fa8c.png",
    github: "https://github.com/GauravGhost/QKart-Backend",
    live: "https://qkartmity.netlify.app/",
}