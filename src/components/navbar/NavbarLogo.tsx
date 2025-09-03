import { animateScroll as scroll } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div onClick={() => scroll.scrollToTop()} className='cursor-pointer  relative bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent hover:scale-105 transition-all hover:text-cyan/50 duration-1000 '>
      <h1 className='  rounded-full p-2 text-2xl hidden md:block'>Saviour Agbor</h1>
      <h1 className=' font-extrabold text-4xl sm:block md:hidden bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent'>SA</h1>
    </div>
  )
}

export default NavbarLogo