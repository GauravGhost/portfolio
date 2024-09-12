import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "../components/ProjectCard";
import ProjectSlider from "../components/Slider";
import { projects } from "../constants/projects";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] w-full leading-[30px]"
        >
          The following projects highlight my skills and experience through real-world examples of my work.
          These projects reflect my ability to tackle complex problems, effectively collaborate with different technologies,
          and manage projects efficiently. They showcase my proficiency in developing innovative solutions,
          my adaptability in working with various programming languages and frameworks, and my dedication to delivering
          high-quality results. Each project is a testament to my commitment to continuous learning and improvement,
          and my ability to drive projects to successful completion.
        </motion.p>
      </div>

      <div className="mt-20">
        <ProjectSlider>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="flex justify-center">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </ProjectSlider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");