import {Link} from "react-scroll"
import { RiArrowRightDownLine } from "react-icons/ri";

const NavbarBtn = () => {
  return (
    <Link
    to="contact"
    smooth={true}
    spy={true}
    duration={1000}
    offset={-134}
    >
      <button
      className="hover:cursor-pointer flex relative items-center gap-1 bg-gradient-to-r 
    from-cyan to-orange hover:scale-110 hover:shadow-[0_0_10px_cyan] transition-all duration-500 
    text-white border-cyan border-[1px] hover:border-orange  px-4 py-2 rounded-full ">
      Hire Me
      <div className="hidden md:block ">
        <RiArrowRightDownLine />
      </div>
    </button>
    </Link>
  );
};

export default NavbarBtn;
