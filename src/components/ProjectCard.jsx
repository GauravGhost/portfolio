import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github,
  live,
  titleText = '24',
  cardPadding = '15',
  tiltMax = "10",
  maxWords = "18",
  imageHeight="250"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncateDescription = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '... ';
  };

  const wordCount = (text) => text.split(' ').length;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="group">
      <Tilt
        options={{ max: tiltMax, scale: 1, speed: 1000 }}
        className={`bg-[#008059] hover:bg-[#006e4d] transition-all duration-300 rounded-2xl w-full flex flex-col`}
        style={{
          padding: `${cardPadding}px`, minHeight: "445px"
        }}
      >

        {/* Project Image */}
        <div 
        className="relative w-full group-hover:brightness-50 group-hover:scale-95  transition-all duration-300"
        style={{height: `${imageHeight}px`}}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Project Name */}
        </div>
        <div className="mt-5">
          <h3 className={`text-white font-bold`} style={{ fontSize: `${titleText}px` }}>{name}</h3>
        </div>

        {/* Source code and link  */}
        <div>
          <p className="text-[13px]">
            {github && <a target="_blank" className="text-green-300 hover:text-green-50" href={github}>Github</a>}
            {github && live && <span className="text-green-50"> | </span>}
            {live && <a target="_blank" className="text-green-300 hover:text-green-50" href={live}>Live</a>}
          </p>
        </div>

        {/* Description */}
        <div>
          <p className="mt-2 text-secondary text-[14px]">
            {isExpanded ? description : truncateDescription(description, maxWords)}
            {/* Toggle button */}
            {maxWords < wordCount(description) && <button
              className="text-blue-400 hover:text-blue-600"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <b key={tag.name}>
              <p className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            </b>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;