import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto bg-black item-center 
        rounded-full border-[0.5px] border-lightOrange p-6 md:gap-6">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="md:hidden sm:block flex text-center items-center justify-center p-6 bg-black rounded-full border-[0.5px] border-lightOrange">
        <button onClick={toggleMenu} className="text-white text-2xl p-3 border-[0.5px] border-lightOrange rounded-full">
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
