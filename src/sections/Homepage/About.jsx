import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../../styles";
import { services } from "../../constants/services";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { calculateExperience } from "../../utils/expCalculator";
import { aboutFramework, aboutSkills, currentCompany, interestedLanguage } from "../../constants/AppConstant";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 15,
      scale: 1.1,
      speed: 1000,
    }}
    className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { years, months } = calculateExperience();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px] w-full"
      >
        I am a software developer with experience of <span className="font-bold text-green-700">+{years}.{months}</span> years in Backend development. I work at <span>{currentCompany}</span>, where I contribute to various projects using <span className="text-green-700">{aboutFramework}</span><br /> I am proficient in {aboutSkills} <br /> <br />

        I am interested in new programming languages like <span className="text-green-700">{interestedLanguage}</span>, and enjoy working on solving new engineering problems. Feel free to reach out at <a className="underline cursor-pointer text-blue-600" href="mailto:gyanendrak874@gmail.com">gyanendrak874@gmail.com</a> for collaboration or queries.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
