import {Link} from "react-scroll"

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({toggleMenu}) => {
 

  return (
    <ul 
      className="
    transition-all duration-500 flex flex-col w-full justify- md:flex-row gap-4 text-white absolute md:relative top-13 md:top-auto left-0 bg-cyan/40 py-2 md:bg-transparent backdrop-blur-2xl rounded-b-lg
    
    md:rounded-none items-center font-semibold text-lg shadow-[0_0_10px_cyan] md:shadow-none 
    md:gap-4  md:left-auto md:backdrop-0 md:py-0 md:w-auto lg:text-md max-w-[600px] mx-auto">
      {links.map((link, index) => {
        return (
          <li key={index} className="group w-full text-center hover:scale-110 transition-all duration-1000 cursor-pointer">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={1000}
              offset={link.section === "skills" ? -30 : -75}
              onClick={toggleMenu}
              className="hover:text-cyan transition-all duration-1000 cursor:pointer sm:block">
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-1000"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
