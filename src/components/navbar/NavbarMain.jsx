import { useEffect, useRef, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarIcon from "./NavbarGroup";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);

  // useRef so we don't re-create the listener on every scroll update
  const lastScrollY = useRef(0);
  const menuOpenRef = useRef(menuOpen);
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const THRESHOLD = 10; // px of scroll to ignore tiny movements
    const SHOW_AT_TOP = 100; // keep nav visible if near top

    const handleScroll = () => {
      const currentY = window.scrollY;

      // if menu is open, keep navbar shown
      if (menuOpenRef.current) {
        lastScrollY.current = currentY;
        setShow(true);
        return;
      }

      // ignore tiny movements
      if (Math.abs(currentY - lastScrollY.current) < THRESHOLD) return;

      // if scrolling down and past threshold from top -> hide
      if (currentY > lastScrollY.current && currentY > SHOW_AT_TOP) {
        setShow(false);
      } else {
        // scrolling up -> show
        setShow(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <nav
      /* translate the whole nav out of view when !show */
      className={`fixed left-0 right-0 z-20 transition-transform duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6
                      bg-darkBrown backdrop-blur-xl rounded-full border border-lightOrange border-y-0">
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
