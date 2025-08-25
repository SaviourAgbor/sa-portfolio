import { PiHexagonThin } from "react-icons/pi";


const HeroPic = () => {
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="flex justify-center  items-center h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] animate-[pulse_10s_linear_infinite]">
        <div className="hover:translate-y-5  transition-all duration-500 border border-[20px] border-cyan/10 w-80 h-80 sm:w-90 sm:h-90 bg-center bg-no-repeat bg-contain hexagon-image"></div>
      </div>
      <div className="flex absolute item-center justify-center -z-10 animate-pulse overflow-hidden">
        <PiHexagonThin className="text-cyan blur-md w-[400px] h-[400px] sm:h-[500px] sm:w-[500px] animate-[spin_20s_linear_infinite] "/>
      </div>
    </div>
  )
}

export default HeroPic