import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";

export default function ExperienceTopRight() {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `I specialize in React, JavaScript, TailwindCSS, and TypeScript, building scalable, maintainable solutions with exceptional user experiences. Passionate about growth, I deliver innovative, high-quality work and drive success through collaboration, communication, and attention to detail.`;

  return (
    <motion.div 
    variants={fadeIn("left", 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="w-full md:w-[80%] lg:w-[35%] border border-lightGrey/50 p-4 rounded-xl shadow-lg shadow-lightGrey/20">
      <p
        onClick={() => setIsExpanded(!isExpanded)}
        className={`text-lg text-center text-lightGrey  ${
          isExpanded ? "" : "line-clamp-4 md:line-clamp-6"
        }`}
      >
        {text}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-cyan hover:shadow shadow-cyan-800 rounded-full p-1 "
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </motion.div>
  );
}