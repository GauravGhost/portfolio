import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { useState } from "react";
import ImageWithHoverArrow from "./ImageWithHoverArrow";

const ProjectCard = ({
  id,
  index,
  name,
  overview,
  tags,
  image,
  github,
  live,
  titleText = '24',
  cardPadding = '15',
  tiltMax = "10",
  maxWords = "18",
  imageHeight = "250",
  minHeight = "445"
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
          padding: `${cardPadding}px`, minHeight: `${minHeight}px`
        }}
      >
        {/* Project Image */}
        <ImageWithHoverArrow image={image} name={name} imageHeight={imageHeight} linkTo={id} key={id} />

          {/* Project Name */}
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
            {isExpanded ? overview : truncateDescription(overview, maxWords)}
            {/* Toggle button */}
            {maxWords < wordCount(overview) && <button
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