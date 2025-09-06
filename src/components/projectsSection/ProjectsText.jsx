import {motion} from "framer-motion"  
import {fadeIn} from "../../framerMotion/variants"
const ProjectsText = () => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    className='mt- text-center md:max-w-[800px] mx-auto '>
      <h1 className="text-4xl font-bold text-cyan">My Projects</h1>
      <p className="text-lg text-white text-left w-full mt-10 shadow-lg  rounded-xl">
        Here are some of the projects I have worked on, showcasing my skills in
        React, JavaScript, and TypeScript. Each project reflects my commitment to
        quality and user experience.
      </p>
    </motion.div>
  )
}

export default ProjectsText