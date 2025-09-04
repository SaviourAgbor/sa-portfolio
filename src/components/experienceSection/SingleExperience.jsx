import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"
function ExperienceSingle({experience, index}) {
  return (
    <motion.div 
    variants={fadeIn("up", index * 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    className="mt-10 h-auto w-full md:h-[440px] md:w-[300px] lg:h-[350px] border-2 border-dashed border-orange/40 rounded-xl p-4">
      <p className="text-cyan font-bold">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc text-white mt-4 ml-4">
        {experience.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>
        
        })}
      </ul>
    </motion.div>
  )
}

export default ExperienceSingle