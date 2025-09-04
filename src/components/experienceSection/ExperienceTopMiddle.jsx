import {motion} from 'framer-motion'
import {fadeIn} from "../../framerMotion/variants"  

function ExperienceTopMiddle() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.7)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
    className="w-[80%] flex alighn-center justify-center lg:w-[35%] ">
      <img
        src="/images/experience-image.png"
        alt="Experience Image"
      />
    </motion.div>
  );
}

export default ExperienceTopMiddle;
