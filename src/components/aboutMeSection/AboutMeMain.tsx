import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

function AboutMeMain() {
  return (
    <div
      id="about"
      className="md:flex sm:grid-cols-1 md:flex-row items-center justify-between gap-15 mx-auto md:max-w-[1200px] mt-15  px-10 lg:px-30 md:mt-[80px]"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
}

export default AboutMeMain;
