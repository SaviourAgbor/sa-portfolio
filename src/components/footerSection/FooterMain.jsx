import {Link} from "react-scroll"

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div>
      <div className="h-[1px] mx-4 bg-lightGrey mt-24 mb-5"></div>
      <div className="flex flex-col gap-1 md:gap-4 max-w-[1200px] md:flex-row md:justify-between text-white px-10">
        <h1 className="text-3xl text-lightGrey">Saviour Agbor</h1>
        <div>
          <ul className="flex text-sm md:text-md items-center  gap-2 md:gap-4">
            {links.map((link, index) => {
        return (
          <li key={index} className="group text-center w-full">
            <Link
              to={link.section}
              smooth={true}
              spy={true}
              duration={1000}
              offset={link.section === "skills" ?  -30 : -75}
              className="hover:text-cyan">
              {link.link}
            </Link>
            <div className="mx-auto group-hover:w-full h-[1px] bg-cyan w-0 transition-all duration-500 text-center"></div>
          </li>
        );
      })}
          </ul>
          <p className="text-sm mb-12 text-lightBrown text-right">© 2025 Saviour Agbor | All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default FooterMain