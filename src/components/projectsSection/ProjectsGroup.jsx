import {motion} from "framer-motion"  
import {fadeIn} from "../../framerMotion/variants"

import SingleProject from "./SingleProject";
const ProjectsGroup = ({ projects }) => {
  return (
    <div className="mt-10 flex flex-col">
      {projects.map((project, index) => {
        return <motion.div
          key={index}
          variants={fadeIn(project.align === 'right' ? "left" : "right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <SingleProject project={project} />;
        </motion.div>
      })}
    </div>
  );
};

export default ProjectsGroup;
