import { RiArrowRightUpLine } from "react-icons/ri";

function SingleProjectText({project}) {
  return (
    <div className={`text-white flex flex-col items-center ${project.align === 'right' 
          ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
      <h2 className="text-xl md:text-2xl text-orange">{project.name}</h2>
      <h3 className="font-light text-white text-lg md:text-xl">{project.date}</h3>
      <a className="flex items-center cursor-pointer gap-1">
        <p className="text-cyan">View</p>
        <span className="p-1 rounded-full bg-cyan text-xs text-black"><RiArrowRightUpLine /></span>
      </a>
    </div>
  )
}

export default SingleProjectText