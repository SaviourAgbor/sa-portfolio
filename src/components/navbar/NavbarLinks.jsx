import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ toggleMenu }) => {
  const isSmall = useMediaQuery({ maxWidth: 767 }); // sm screen
  return (
    <motion.ul
      variants={isSmall ? fadeIn("down", 0.3) : undefined}
      initial={isSmall ? "hidden" : false}
      whileInView={isSmall ? "show" : false}
      viewport={isSmall ? { once: false, amount: 0.01 } : undefined}
      className="flex absolute md:relative flex-col md:flex-row md:max-w-[500px]
     lg:mx-w-[500px] items-center justify-between md:mx-auto gap-2 md:gap-4 text-lg md:text-xl lg:text-2xl md:font-light text-white top5 md:top-auto md:bg-transparent bg-cyan/20 
    w-full backdrop-blur-xl py-2 pt-14 md:pt-0 rounded-b-2xl md:rounded-none left-0 md:shadow-none right-5 overflow-hidden -z-1 md:z-20"
    >
      {links.map((link, index) => (
        <li
          key={index}
          className="group w-full text-center hover:scale-110 transition-all duration-1000 cursor-pointer"
        >
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={1000}
            offset={link.section === "skills" ? -30 : -75}
            onClick={toggleMenu}
            className="hover:text-cyan shadow-lg flex justify-center transition-all duration-500 cursor:pointer sm:block"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan/70 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavbarLinks;
