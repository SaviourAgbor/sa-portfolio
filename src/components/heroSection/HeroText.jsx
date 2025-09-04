import {motion} from "framer-motion"
import {fadeIn} from "../../framerMotion/variants"

const HeroText = () => {
  return (
    <div className="flex flex-col text-center md:text-left left justify-center gap-2 h-full mt-8 ">
      <motion.h2
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
       className="lg:text-xl text-xl uppercase text-cyan/70">
        Front-End web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      className="text-4xl md:text-[2.5rem] lg:text-6xl text-orange font-bold">
        Saviour Agbor
      </motion.h1>
      <motion.p 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      className="xs:text-center md:text-left text-lg leading-5 text-white font-light ">
        Passionate Web-Developer<br /> and Instructor. 
       
      </motion.p>
    </div>
  );
};

export default HeroText;
