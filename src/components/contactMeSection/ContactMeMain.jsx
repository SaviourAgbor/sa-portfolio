import {motion} from 'framer-motion'  
import {fadeIn} from "../../framerMotion/variants"
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";



const ContactMeMain = () => {
  return (
    <div id="contact" className="mt-10 mx-5 md:mx-10 max-w-[1200px]">
      <h1 className="text-center text-4xl font-bold text-cyan mb-5">
        Contact Me
      </h1>
      
      <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      className="bg-lightBrown/40 p-2 pt-5 rounded-xl flex flex-col items-center md:flex-row md:justify-between gap-14">
        <ContactMeLeft />
        <ContactMeRight />
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
