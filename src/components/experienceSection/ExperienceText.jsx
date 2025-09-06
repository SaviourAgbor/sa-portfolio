import {motion} from 'framer-motion'  
import {fadeIn} from "../../framerMotion/variants"
function ExperienceText() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2}}
    className='text-center'>
      <h2 className="text-4xl font-bold mb-10 text-cyan">Experience</h2>
    </motion.div>
  )
}

export default ExperienceText