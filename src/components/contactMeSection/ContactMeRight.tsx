import contactEmailImg from "../../../public/images/email-image.png";
import { MdOutlineMail } from "react-icons/md";
import { LiaPhoneSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import SocialIcons from "./SocialIcons";

const ContactMeRight = () => {
  return (
    <div className=" w-[300px] flex flex-col items-center md:items-left">
      <div className="w-[full]">
        <img src={contactEmailImg} alt="" className="w-full mb-5" />
      </div>

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
          <p>Remote</p>
        </a>
      </div>

      <SocialIcons />
    </div>
  );
};

export default ContactMeRight;
