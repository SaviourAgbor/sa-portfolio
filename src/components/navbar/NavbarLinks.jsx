import { Link } from "react-scroll";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

// transition-all duration-500 flex flex-col w-full justify- md:flex-row gap-4 text-white absolute md:relative top-13 md:top-auto left-0 bg-cyan/40 py-2 md:bg-transparent backdrop-blur-2xl rounded-b-lg

//     md:rounded-none items-center font-semibold text-lg shadow-[0_0_10px_cyan] md:shadow-none
//     md:gap-4  md:left-auto md:backdrop-0 md:py-0 md:w-auto lg:text-md max-w-[600px] mx-auto

const NavbarLinks = ({ toggleMenu }) => {
  return (
    <ul className="flex absolute md:relative flex-col md:flex-row md:max-w-[500px] lg:mx-w-[500px] items-center justify-between md:mx-auto gap-0 md:gap-4 text-lg md:text-xl lg:text-2xl font-thin text-white top-8 md:top-auto md:bg-transparent bg-darkBrown w-[23%] md:w-full backdrop-blur-xl py-2 rounded-b-2xl md:rounded-none shadow-[0_0_10px_cyan] px-4 md:shadow-none right-5 overflow-hidden -z-1 md:z-20">
      {links.map((link, index) => {
        return (
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
              className="hover:text-cyan transition-all duration-500 cursor:pointer sm:block"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan/70 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
