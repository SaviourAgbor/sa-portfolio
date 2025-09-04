import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"  
import { FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SingleSkill from "./SingleSkill";


// Create the array of skills
const skills = [
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
      <div className="lg:flex justify-center align-center grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 ">
        {skills.map((item,index) => {
           return <motion.div
           key={index}
           variants={fadeIn("up", `${index * 0.2}`)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: false, amount: 0.2 }}
           >
            <SingleSkill text={item.skill} imgSvg={<item.icon />} />
           </motion.div>
      })}
      </div>
    </div>
  )
}

export default AllSkills
