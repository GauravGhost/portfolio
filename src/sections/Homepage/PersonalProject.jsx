import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectCard from "../../components/ProjectCard";
import ProjectSlider from "../../components/Slider";
import { personalProjects } from "../../constants/personalProjects";

const PersonalProject = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Projects</p>
                <h2 className={styles.sectionHeadText}>Personal Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] w-full leading-[30px]"
                >
                    The following personal projects demonstrate my skills and experience through practical, real-world examples.
                    Each project reflects my ability to solve complex problems, work with diverse technologies, and manage various aspects of development effectively.
                </motion.p>
            </div>

            <div className="mt-20">
                <ProjectSlider slidesToScroll={1} slidesToShow={3} infinite={true} swipeToSlide={true}>
                    {personalProjects.map((project, index) => (
                        <div key={`${project.name}`} className="flex justify-center px-3">
                            <ProjectCard index={index} {...project} titleText="18" cardPadding="10" tiltMax="0" imageHeight="200" />
                        </div>
                    ))}
                </ProjectSlider>
            </div>
        </>
    );
};

export default SectionWrapper(PersonalProject, "");