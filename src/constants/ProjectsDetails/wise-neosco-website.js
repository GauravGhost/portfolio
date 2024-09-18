import { jobit } from "../../assets";
import { techTags } from "../techTags";

export default {
    id: "wise-neosco-homepage",
    name: "Wise Neosco Website",
    overview: "The website is developed for Wisenesco Co., Ltd., a company specializing in creating innovative library systems. The website is built using PHP and follows a structured approach with reusable components, such as headers and sidebars, included from common files. It leverages a translation system to support multiple languages, ensuring accessibility to a broader audience.",
    description:
        "Wiseneosco Co., Ltd.'s website aims to provide comprehensive information about the company's vision, products, and services. It highlights the company's commitment to enhancing library systems through quality information and innovative technology. The website is designed to be user-friendly, with a clear structure and navigation, making it easy for visitors to find the information they need.",
    features: {
        "Core Features": [
            "The website uses a translation system to display content in multiple languages, making it accessible to a global audience.",
            "Common elements like headers and sidebars are included from separate PHP files, promoting code reusability and maintainability.",
            "Sections showcasing the company's products and services, emphasizing their benefits and unique features.",
            "Use of icons and images to enhance the visual appeal of the website.",
            "Breadcrumbs are used to improve navigation and provide users with a clear path back to previous pages.",
        ],
    },
    tags: [
        techTags.php,
        techTags.mysql,
        techTags.html,
        techTags.javascript,

    ],
    image: jobit,
    source: {
    },
}