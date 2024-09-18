import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { next } from "../assets"
import { fadeIn } from "../utils/motion";
import { useState } from "react";
import ImageWithHoverArrow from "./ImageWithHoverArrow";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  id,
  index,
  name,
  overview,
  tags,
  image,
  source,
  titleText = '24',
  cardPadding = '15',
  tiltMax = "10",
  maxWords = "18",
  imageHeight = "250",
  minHeight = "445"
}) => {
  const navigate = useNavigate();
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

        <div className="flex flex-row justify-between">
          <div className="">
            {/* Project Name */}
            <div className="mt-5">
              <h3 className={`text-white font-bold`} style={{ fontSize: `${titleText}px` }}>{name}</h3>
            </div>

            {/* Source code and link  */}
            <div>
              <p className="text-[13px]">
                {source.github && <a target="_blank" className="text-green-300 hover:text-green-50" href={source.github.link}>Github</a>}
                {source.github && source.live && <span className="text-green-50"> | </span>}
                {source.live && <a target="_blank" className="text-green-300 hover:text-green-50" href={source.live.link}>Live</a>}
              </p>
            </div>
          </div>
          {/* Project detail button */}
          <div className="p-2 sm:hidden">
            <button
              onClick={() => navigate(`/project/${id}`)}
              className=" bg-green-300 hover:bg-gray-500 rounded-full mr-1 w-9 h-9 mt-2 flex items-center justify-center"
              aria-label="Go to previous page"
            >
              <img src={next} alt="Next" className="w-7 h-7" />
            </button>
            <p className="text-sm">More</p>
          </div>
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