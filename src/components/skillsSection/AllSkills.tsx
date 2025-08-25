import { FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SingleSkill from "./SingleSkill";

// Define the shape of each skill object
type Skill = {
  skill: string;
  icon: any;
};

// Create the array of skills
const skills: Skill[] = [
  { skill: 'HTML', icon: FaHtml5 },
  { skill: 'CSS3', icon: FaCss3Alt },
  { skill: 'JavaScript', icon: IoLogoJavascript },
  { skill: 'ReactJS', icon: FaReact },
  { skill: 'NextJS', icon: RiNextjsFill },
  { skill: 'TailwindCSS', icon: RiTailwindCssFill },
  { skill: 'TypeScript', icon: SiTypescript },
];


const AllSkills = () => {
  return (
    <div>
      <div className="lg:flex justify-center align-center grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 mt-15">
        {skills.map((item,index) => {
           return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
      })}
      </div>
    </div>
  )
}

export default AllSkills
