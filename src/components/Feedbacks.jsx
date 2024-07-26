import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { github, gmail, linkedin, whatsapp } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);
// max-w-7xl
const Feedbacks = () => {
  return (
    <div className="mt-12   bg-black-100 rounded-[20px] flex justify-between items-center flex-wrap">
      <div
        className={`${styles.padding} rounded-2xl `}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Feel Free to Reach Out</p>
          {/* <h2 className={styles.sectionHeadText}>Testimonials.</h2> */}
          <p className="mt-4">Email
            <a className=" pl-4 cursor-pointer text-gray-400" href="mailto:gyanendrak478@gmail.com">
              gyanendrak478@gmail.com
            </a>
          </p>
          <p className="mt-1">Phone
            <a className=" pl-4 cursor-pointer text-gray-400" href="https://wa.me/+916200551873">
              +91 8967900358
            </a>
          </p>
        </motion.div>
      </div>
      <div className={`flex ${styles.padding} rounded-2xl `}>
        <div className=" inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open("https://github.com/gauravghost", "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className=" inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open("https://www.linkedin.com/in/gyanendrak874/", "_blank")}
            className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="linkdin"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        <div className=" inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open("mailto:gyanendrak478@gmail.com", "_blank")}
            className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={gmail}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className=" inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open("https://wa.me/+916200551873", "_blank")}
            className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={whatsapp}
              alt="github"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
