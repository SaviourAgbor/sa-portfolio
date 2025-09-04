import { PiHexagonThin } from "react-icons/pi";
import {motion} from "framer-motion"
import {fadeIn} from "../../framerMotion/variants"


const HeroPic = () => {
  return (
    <div className="h-full flex justify-center items-center ">
      <motion.div 
      variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.01 }}
      className="flex justify-center  items-center h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] animate-[pulse_10s_linear_infinite]">
        <div    
        className="hover:translate-y-5  transition-all duration-500  border-x-[20px] border-cyan/10 w-80 h-80 sm:w-90 sm:h-90 bg-center bg-no-repeat bg-contain hexagon-image"></div>
      </motion.div>
      <motion.div 
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}

      className="flex absolute item-center justify-center -z-10 animate-pulse overflow-hidden">
        <PiHexagonThin className="text-cyan blur-md w-[400px] h-[400px] md:h-[500px] md:w-[500px] animate-[spin_20s_linear_infinite] "/>
      </motion.div>
    </div>
  )
}

export default HeroPic