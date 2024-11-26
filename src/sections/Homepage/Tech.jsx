import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants/technology";
import SkillsIconsList from "../../components/SkillsIconsList";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
            <SkillsIconsList technologies={technologies}/>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
