import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

import { useState } from "react";
import NavbarIcon from "./NavbarGroup";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="px-8 pt-2 w-full flex fixed justify-center z-20  items-center">
      <div className=" flex justify-between px-6 md:py-4 w-full gap-10 items-center bg-black rounded-full border  border-lightOrange">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} absolute w-full left-0 md:relative md:block`}>
          <NavbarLinks toggleMenu={toggleMenu} />
        </div>
        <NavbarBtn />
        <div className="md:hidden">
          <NavbarIcon toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
