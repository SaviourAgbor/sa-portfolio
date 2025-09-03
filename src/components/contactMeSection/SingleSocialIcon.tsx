import {motion} from 'framer-motion'  
import {fadeIn} from "../../framerMotion/variants"

const SingleSocialIcon = ({ icon, index}) => {
  return (
    <motion.div 
    variants={fadeIn("up", index * 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.5 }}
    className={`text-3xl text-orange cursor-pointer p-1 border border-orange rounded-full hover:bg-${icon.hoverBackgroundColor} hover:text-${icon.hoverIconColor} transition-all duration-1000 hover:border-transparent`}>
      <icon.Icon/>
    </motion.div>
  )
}

export default SingleSocialIcon