
function ExperienceInfo({number, text}) {
  return (
    <div className="text-center">
      <p className="font-bold text-2xl md:text-6xl text-cyan ">{number}</p>
      <p className="font-bold md:text-md text-lightGrey uppercase -mt-2 md:-mt-4">{text}</p>
    </div>
  )
}

export default ExperienceInfo