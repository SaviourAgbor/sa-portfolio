import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarIcon = ({toggleMenu, menuOpen }) => {
  return (
    <div>
      
      <div className="md:hidden sm:block flex text-center items-center justify-center p-6 bg-black rounded-full border-[0.5px] border-lightOrange">
        <button onClick={toggleMenu} className="text-white text-2xl p-3 border-[0.5px] border-lightOrange rounded-full">
          {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  )
}

export default NavbarIcon