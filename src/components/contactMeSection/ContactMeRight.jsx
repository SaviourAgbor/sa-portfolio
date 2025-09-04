import {motion} from 'framer-motion'  
import {fadeIn} from "../../framerMotion/variants"
import contactEmailImg from "/images/email-image.png";
import { MdOutlineMail } from "react-icons/md";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import SocialIcons from "./SocialIcons";

const ContactMeRight = () => {
  return (
    <div className=" w-[200px] md:w-[300px] flex flex-col items-center md:items-left">
      <motion.div 
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.05 }}
      className="w-[full]">
        <img src={contactEmailImg} alt="" className="w-full mb-5" />
      </motion.div>

      <div className="flex flex-col items-center md:items-left gap-1 text-white font-light ">
        <a href="#" className="flex gap-2 items-center">
          <div>
            <MdOutlineMail />
          </div>
          <p>saviouragor1@gmail.com</p>
        </a>

        <a href="#" className="flex items-center gap-2">
          <div>
            <LiaPhoneSolid />
          </div>
          <p>+2347048681652</p>
        </a>

        <a href="#" className="flex items-center gap-2">
          <div>
            <TfiLocationPin />
          </div>
          <p>Nigeria</p>
        </a>
      </div>

      <SocialIcons />
    </div>
  );
};

export default ContactMeRight;
