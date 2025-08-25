const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul
      className="
    flex flex-col items-center gap-6 text-white font-semibold text-lg absolute top-[120%]
    left-[50%] -translate-x-[50%] w-full py-4 bg-cyan/30 backdrop-blur-lg shadow-lg transition-all duration-500

    md:flex-row md:relative md:gap-4 md:translate-x-0 md:top-auto md:left-auto md:bg-black 
    md:shadow-none md:backdrop-blur-0 md:py-0 md:w-auto lg:text-md">
      {links.map((link, index) => {
        return (
          <li key={index} className="group w-full text-center">
            <a
              href="#"
              className="hover:text-cyan transition-all duration-500 cursor:pointer sm:block">
              {link.link}
            </a>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
