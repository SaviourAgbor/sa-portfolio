import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarIcon = ({toggleMenu, menuOpen }) => {
  
  return (
    <div>
      
      <div className="md:hidden sm:block flex text-center items-center justify-center p-1  bg-transparent rounded-full border-[0.5px] border-lightOrange/30">
        <button onClick={toggleMenu} className="text-white text-2xl p-3 border-[0.5px] border-lightOrange/40 rounded-full">
          {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>
      </div>
    </div>
  )
}

export default NavbarIcon