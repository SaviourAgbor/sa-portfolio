import {motion} from 'framer-motion'  
import {fadeIn} from "../../src/framerMotion/variants"
const HorizontalLine = () => {
  return (
    <motion.div 
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    className="w-full flex justify-around mt-15 text-grey">
      <hr className="border-t-8 w-[20%] text-darkGrey/30"/>
      <hr className="border-t-8 w-[40%] text-darkGrey/30"/>
      <hr className="border-t-8 w-[20%] text-darkGrey/30"/>
    
    </motion.div>
  )
}

export default HorizontalLine